import React, { useState, useCallback } from "react"
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary"
import { Download, Clock, FileDown, FileUp } from "lucide-react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { filesize } from "filesize"

dayjs.extend(relativeTime)

// Define a flexible video type that works with both Prisma and API responses
interface VideoData {
  id: string
  title: string
  description: string | null
  publicId: string
  originalSize: string | number
  compressedSize: string | number
  duration: number
  createdAt: Date | string
  updatedAt?: Date | string
}

interface VideoCardProps {
  video: VideoData
  onDownload: (url: string, title: string) => void
  staticPreview?: boolean
  autoPlayPreview?: boolean
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onDownload, staticPreview = false, autoPlayPreview = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [previewError, setPreviewError] = useState(false)

  const getThumbnailUrl = useCallback((publicId: string) => {
    return getCldImageUrl({
      src: publicId,
      width: 400,
      height: 225,
      crop: "fill",
      gravity: "auto",
      format: "jpg",
      quality: "auto",
      assetType: "video",
    })
  }, [])

  const getFullVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 1920,
      height: 1080,
    })
  }, [])

  const getPreviewVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 400,
      height: 255,
      rawTransformations: ["e_preview:duration_15:max_seg_9:min_seg_dur_1"],
    })
  }, [])

  const formatSize = useCallback((size: number) => {
    return filesize(size)
  }, [])

  const formatDuration = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.round(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }, [])

  const compressionPercentage = Math.round(
    (1 - Number(video.compressedSize) / Number(video.originalSize)) * 100
  )

  const handlePreviewError = () => {
    setPreviewError(true)
  }

  const handleMouseEnter = () => {
    if (!staticPreview) {
      setPreviewError(false) // Reset error state when entering
      setIsHovered(true)
    }
  }

  return (
    <div
      className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail / Preview Area */}
      <figure className="aspect-video relative bg-gray-900 overflow-hidden">
        {isHovered || autoPlayPreview ? (
          <video
            src={previewError ? getFullVideoUrl(video.publicId) : getPreviewVideoUrl(video.publicId)}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover scale-105 transition-transform duration-700"
            onError={!previewError ? handlePreviewError : undefined}
          />
        ) : (
          <img
            src={getThumbnailUrl(video.publicId)}
            alt={video.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-medium text-white flex items-center gap-1">
          <Clock size={10} className="text-gray-300" />
          {formatDuration(video.duration)}
        </div>
      </figure>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex justify-between items-start gap-4 mb-2">
           <h2 className="text-base font-medium text-white leading-tight line-clamp-1" title={video.title}>
             {video.title}
           </h2>
           {/* Download Action */}
           <button
             className="shrink-0 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
             onClick={(e) => {
               e.stopPropagation();
               onDownload(getFullVideoUrl(video.publicId), video.title);
             }}
             title="Download Video"
           >
             <Download size={14} />
           </button>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2 mb-4 min-h-[2.5em]">
          {video.description || "No description provided."}
        </p>

        {/* Stats Grid */}
        <div className="mt-auto grid grid-cols-2 gap-2 p-2.5 bg-white/5 rounded-xl border border-white/5">
          {/* Original */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium uppercase tracking-wider">
               <FileUp size={10} />
               Original
            </div>
             <div className="text-xs font-mono text-gray-300">
               {formatSize(Number(video.originalSize))}
             </div>
          </div>

          {/* Compressed */}
          <div className="flex flex-col gap-0.5 border-l border-white/5 pl-2.5">
            <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-medium uppercase tracking-wider">
               <FileDown size={10} />
               Optimized
            </div>
             <div className="text-xs font-mono text-white">
               {formatSize(Number(video.compressedSize))}
             </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between mt-3 text-[10px] font-medium border-t border-white/5 pt-3">
           <div className="text-gray-600">
              {dayjs(video.createdAt).fromNow()}
           </div>
           <div className="text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">
             -{compressionPercentage}% Size
           </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
