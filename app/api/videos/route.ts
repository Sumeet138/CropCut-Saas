import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export async function GET(request: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(videos)
  } catch (error) {
    return NextResponse.json({ error: "something went wrong" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
