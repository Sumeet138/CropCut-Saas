"use client"

import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import VideoCard from "@/components/VideoCard"
import { Video } from "@/types"
import { Loader2 } from "lucide-react"

function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos")
      if (Array.isArray(response.data)) {
        setVideos(response.data)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.log(error)
      setError("Failed to fetch videos")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  const handleDownload = useCallback((url: string, title: string) => {
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${title}.mp4`)
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
         <div className="text-red-500 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
            {error}
         </div>
      </div>
    )
  }

  return (
    <div className="text-white p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
               Your Gallery
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
               Manage and view all your processed videos in one place.
            </p>
        </div>

        {/* Video Grid */}
        {videos.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-white/5 border-dashed">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                 <img src="/Cropcut.svg" alt="CropCut" className="w-8 h-8 opacity-50" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No videos yet</h3>
              <p className="text-gray-500 text-center max-w-sm px-4">
                 Upload your first video to start processing and see it appear here.
              </p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onDownload={handleDownload}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
