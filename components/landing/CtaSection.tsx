"use client"

import React, { useRef } from "react"

export const CtaSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // When video ends, pause at the last frame
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration - 0.001
      videoRef.current.pause()
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            See CropCut in <span className="font-serif italic text-orange-200">Action</span>
          </h2>
        </div>

        {/* Video - Blended with background */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover object-top"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Top Gradient Mask - Blends video top into background */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-10" />

            {/* Bottom Gradient Mask */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-10" />
            
            {/* Side gradients */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

