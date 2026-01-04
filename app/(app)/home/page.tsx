"use client"

import React,{useState, useEffect, useCallback, use} from "react"
import axios from "axios"
import VideoCard from "@/components/VideoCard"
import { Video } from "@/types"
import { url } from "node:inspector"


function Home() {
  
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos")
      if (Array.isArray(response.data)) {
        setVideos(response.data)
      }else {
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
    () =>{
      const link = document.createElement("a")
      link.href = url;
      link.setAttribute("download", `${title}.mp4`)
      link.setAttribute("target", "_blank")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  },[])

  if (loading) {
    return <div>Loading...</div>
  }


  return <div>Home</div>
}

export default Home
