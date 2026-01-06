import { NextResponse, NextRequest } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import { auth } from "@clerk/nextjs/server"
import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { getCompressionSettings } from "@/lib/cloudinary-config"

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

// Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
})

interface CloudinaryUploaderResult {
  public_id: string
  bytes?: number
  duration?: number
  [key: string]: unknown
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (
      !process.env.Next_PUBLIC_CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { error: "Cloudinary not configured" },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get("file") as File | null
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const orginalSize = formData.get("originalSize") as string

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const result = await new Promise<CloudinaryUploaderResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "video",
            folder: "video-uploads",
            transformation: [getCompressionSettings("balanced")], // 40-60% compression
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result as CloudinaryUploaderResult)
          }
        )
        uploadStream.end(buffer)
      }
    )
    const video = await prisma.video.create({
      data: {
        title,
        description,
        publicId: result.public_id,
        originalSize: orginalSize,
        compressedSize: String(result.bytes),
        duration: result.duration || 0,
      },
    })

    return NextResponse.json(video)
  } catch (error) {
    console.log("Upload Video error:", error)
    return NextResponse.json({ error: "Upload Video failed" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
