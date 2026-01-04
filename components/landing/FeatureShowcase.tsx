"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone, Maximize, Heart, MessageCircle, Share2, MoreHorizontal, Bookmark, Play, Sparkles, ThumbsUp, MoreVertical, Volume2, Settings } from "lucide-react"
import VideoCard from "@/components/VideoCard"

export const FeatureShowcase = () => {
  const [activeCrop, setActiveCrop] = useState(0)
  
  // Ratios for the "Right side" animation
  const crops = [
    { name: "Original", ratio: "aspect-video", width: "w-full", label: "16:9 Landscape" },
    { name: "Square", ratio: "aspect-square", width: "w-1/2", label: "1:1 Square" },
    { name: "Portrait", ratio: "aspect-[9/16]", width: "w-1/3", label: "9:16 Story" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCrop((prev) => (prev + 1) % crops.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const MOCK_VIDEO_1 = {
    id: "1",
    publicId: "samples/cld-sample-video", 
    title: "Static Thumbnail",
    description: "Standard random keyframe selection",
    duration: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
    originalSize: "52428800",
    compressedSize: "10485760",
  }
  
  const MOCK_VIDEO_2 = {
    id: "2",
    publicId: "samples/cld-sample-video", 
    title: "Context Aware Preview",
    description: "Context aware preview like what is the most impo from the video",
    duration: 45,
    createdAt: new Date(),
    updatedAt: new Date(),
    originalSize: "20971520",
    compressedSize: "5242880",
  }

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* --- Feature 1: Intelligent Cropping --- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 mb-32 relative">
           
           {/* Visual Side (Right on Desktop) - Increased Size */}
           <motion.div 
             layout
             className="w-full md:w-3/5 flex items-center justify-center gap-1 lg:gap-2 relative"
           >
              {/* Left Image: Original */}
              <div className="relative z-10 flex-1 min-w-[200px] max-w-[320px]">
                 {/* Aesthetic Outer Frame */}
                 <div className="p-2 md:p-3 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm group hover:border-white/20 transition-colors duration-500">
                    <div className="aspect-[16/9] bg-gray-800 rounded-xl overflow-hidden border border-white/5 relative">
                       <img 
                         src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
                         alt="Original" 
                         className="w-full h-full object-cover opacity-80"
                       />
                       <div className="absolute inset-0 bg-black/20" />
                       <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white/80 border border-white/10">Original Footage</div>
                    </div>
                 </div>
              </div>
              
              {/* Beam Arrow Icon */}
              <div className="text-blue-400 shrink-0 flex flex-col items-center gap-2 relative z-20 mx-1 md:mx-2">
                 {/* Animated Beam */}
                 <div className="relative w-6 md:w-8 h-8 flex items-center justify-center">
                    {/* Track */}
                    <div className="absolute inset-x-0 h-[2px] bg-blue-500/20 rounded-full" />
                    
                    {/* Moving Beam */}
                    <motion.div 
                        className="absolute left-0 h-[2px] w-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]"
                        animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    

                 </div>
              </div>

               {/* Right Image: Transitioning Crop */}
               <div className="relative z-10 flex-1 min-w-[200px] max-w-[320px] flex flex-col items-center justify-end h-[420px] pb-12">
                  {/* Fixed container to center the changing element */}
                    {/* Aesthetic Outer Dynamic Frame - Blue Theme */}
                    <motion.div 
                        layout
                        transition={{ 
                            type: "spring",
                            stiffness: 120,
                            damping: 20
                        }}
                        className="p-2 md:p-3 bg-gradient-to-b from-blue-500/10 to-blue-500/5 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm relative"
                    >
                        <motion.div
                          layout
                          initial={false}
                          animate={{ 
                            width: activeCrop === 2 ? '180px' : activeCrop === 1 ? '260px' : '340px',
                            height: activeCrop === 2 ? '320px' : activeCrop === 1 ? '260px' : '200px',
                          }}
                          transition={{ 
                            type: "spring",
                            stiffness: 120,
                            damping: 20
                          }}
                          className={`relative bg-gray-900 rounded-xl overflow-hidden shadow-inner group`}
                        >
                            <motion.img 
                               layoutId="cropImage"
                               src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
                               alt="Cropped" 
                               className="w-full h-full object-cover"
                             />
                             <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/40 pointer-events-none" />
                             
                             {/* --- DYNAMIC UI OVERLAYS --- */}
                             <AnimatePresence>
                                {/* 16:9 Landscape Layout (Player) */}
                                {activeCrop === 0 && (
                                   <motion.div 
                                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                     className="absolute inset-0 flex flex-col justify-end p-3 pointer-events-none"
                                   >
                                      <div className="w-full h-1 bg-white/20 rounded-full mb-1">
                                         <div className="w-1/3 h-full bg-blue-500 rounded-full" />
                                      </div>
                                      <div className="flex justify-between items-center text-[8px] text-white/50 font-mono">
                                         <span>00:12</span>
                                         <span>02:45</span>
                                      </div>
                                      
                                      {/* Center Play */}
                                      <div className="absolute inset-0 flex items-center justify-center">
                                         <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center border border-white/10">
                                            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                                         </div>
                                      </div>
                                   </motion.div>
                                )}

                                {/* 1:1 Square Layout (Instagram Post) */}
                                {activeCrop === 1 && (
                                   <motion.div 
                                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                      className="absolute inset-0 flex flex-col justify-between pointer-events-none"
                                   >
                                      {/* Header */}
                                      <div className="p-2 flex items-center justify-between bg-gradient-to-b from-black/40 to-transparent">
                                         <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-full bg-blue-500 border border-white/20" />
                                            <div className="w-12 h-1.5 bg-white/40 rounded-full" />
                                         </div>
                                         <MoreHorizontal className="w-3 h-3 text-white" />
                                      </div>

                                      {/* Footer Actions */}
                                      <div className="p-2 bg-gradient-to-t from-black/60 to-transparent">
                                         <div className="flex justify-between items-center mb-1.5">
                                            <div className="flex gap-2 text-white">
                                               <Heart className="w-3 h-3" />
                                               <MessageCircle className="w-3 h-3" />
                                               <Share2 className="w-3 h-3" />
                                            </div>
                                            <Bookmark className="w-3 h-3 text-white" />
                                         </div>
                                         <div className="w-16 h-1 bg-white/30 rounded-full mb-1" />
                                         <div className="w-24 h-1 bg-white/10 rounded-full" />
                                      </div>
                                   </motion.div>
                                )}

                                {/* 9:16 Portrait Layout (Reels/TikTok) */}
                                {activeCrop === 2 && (
                                   <motion.div 
                                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                      className="absolute inset-0 pointer-events-none"
                                   >
                                      {/* Right Sidebar Actions */}
                                      <div className="absolute right-1.5 bottom-12 flex flex-col gap-3 items-center">
                                         {[Heart, MessageCircle, Share2].map((Icon, i) => (
                                            <div key={i} className="flex flex-col items-center gap-0.5">
                                               <Icon className="w-4 h-4 text-white drop-shadow-md" />
                                               <div className="w-3 h-0.5 bg-white/50 rounded-full" />
                                            </div>
                                         ))}
                                      </div>

                                      {/* Bottom User Info */}
                                      <div className="absolute bottom-2 left-2 right-8 flex flex-col gap-1.5">
                                         <div className="flex items-center gap-1.5">
                                            <div className="w-5 h-5 rounded-full bg-blue-500 border border-white" />
                                            <div className="w-16 h-1.5 bg-white/80 rounded-full shadow-sm" />
                                         </div>
                                         <div className="w-24 h-1 bg-white/60 rounded-full" />
                                         <div className="w-20 h-1 bg-white/40 rounded-full" />
                                      </div>
                                   </motion.div>
                                )}
                             </AnimatePresence>
                             
                        </motion.div>
                    </motion.div>


               </div>
           </motion.div>

           {/* Text Side (Left on Desktop) */}
           <motion.div 
             layout
             className="w-full md:w-2/5 text-left"
             transition={{ type: "spring", stiffness: 100, damping: 20 }}
           >
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Intelligent <br className="hidden md:block" /> <span className="font-serif italic text-blue-300 whitespace-nowrap">Thumbnail Creation</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Our AI analyzes your image focal point to generate high-converting thumbnails or automatically reframe for every social platform. Keep your subject center-stage.
              </p>
              
              {/* Dynamic Ratio List */}
              <div className="flex flex-wrap gap-3">
                {crops.map((crop, idx) => (
                  <button
                    key={crop.name}
                    onClick={() => setActiveCrop(idx)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeCrop === idx 
                        ? "bg-blue-600 border-blue-500 text-white shadow-lg scale-105" 
                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                     {crop.name} <span className="opacity-50 ml-1 text-xs">{crop.label.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
           </motion.div>
        </div>


        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20 lg:my-32" />

        {/* --- Feature 2: Video Preview --- */}
        {/* "on left side a video in 2x which is too long and to right side a video preview is getting displayed" */}
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Visual Side */}
            <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
               <div className="w-full md:w-1/2 max-w-[320px]">
                  <VideoCard video={MOCK_VIDEO_1} onDownload={() => {}} staticPreview />
               </div>
               <div className="w-full md:w-1/2 max-w-[320px]">
                   <VideoCard video={MOCK_VIDEO_2} onDownload={() => {}} autoPlayPreview />
               </div>
            </div>


            {/* Text Side */}
            <div className="flex-1 w-full text-left">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                 Smart <span className="font-serif italic text-orange-200">Context</span> <br /> <span className="font-serif italic text-orange-200">Awareness</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Stop relying on random crops. Our AI understands the context of your video, ensuring the most important moments stay in focus, automatically creating the perfect preview every time.
              </p>
           </div>

        </div>

      </div>
    </section>
  )
}
