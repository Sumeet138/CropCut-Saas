"use client"

import React from "react"
import { Zap, Layers, Share2, Sparkles, BarChart3, FileVideo, Youtube, Instagram, Twitter } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import Marquee from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const files = [
  { name: "video_01.mp4", size: "24MB -> 2MB" },
  { name: "vlog_final.mov", size: "1GB -> 150MB" },
  { name: "clip.webm", size: "50MB -> 5MB" },
  { name: "recording.mkv", size: "500MB -> 60MB" },
  { name: "promo.mp4", size: "120MB -> 12MB" },
];

const features = [
  {
    name: "Smart Compress",
    description: "Reduce file size by up to 90% without losing visual quality. Optimized for web sharing.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] w-full"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white/10 bg-white/5 hover:bg-white/10",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
               <FileVideo className="w-4 h-4 text-blue-400" />
              <div className="flex flex-col">
                <figcaption className="text-xs font-medium text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-[10px] text-gray-400">{f.size}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    name: "Multi-Format Resize",
    description: "Instantly convert landscape videos to portrait, square, or custom ratios.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
       <div className="absolute top-8 right-8 w-full h-full opacity-50 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* Mock Stack */}
          <div className="absolute top-0 right-10 w-48 h-32 bg-gray-800 rounded-lg border border-white/10 transform rotate-6 z-10 transition-transform group-hover:rotate-12" />
          <div className="absolute top-4 right-16 w-48 h-32 bg-gray-900 rounded-lg border border-white/10 transform rotate-3 z-20 transition-transform group-hover:rotate-6" />
          <div className="absolute top-8 right-22 w-48 h-32 bg-black rounded-lg border border-white/10 z-30 flex items-center justify-center transition-transform group-hover:scale-105">
             <div className="text-xs text-gray-500 font-mono">16:9 / 9:16 / 1:1</div>
          </div>
       </div>
    ),
  },
  {
    name: "Context-Aware Cropping",
    description: "Upload a video to automatically get multiple resolution layouts with intelligent context-aware cropping.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "",
    background: (
       <div className="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
          {/* Diagonal Stripes Pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #f97316 10px, #f97316 11px)' 
               }} 
          />
          
          {/* Coming Soon Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] px-6 py-2 bg-[#1a1500] border border-yellow-700/50 text-yellow-600 font-black text-sm tracking-[0.2em] shadow-xl backdrop-blur-md z-20">
             COMING SOON
          </div>
       </div>
    ),
  },
  {
    name: "One-Click Share",
    description: "Publish to all your favorite platforms instantly.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "",
    background: (
      <Marquee
        reverse
        pauseOnHover
        className="absolute top-16 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
      >
          {[Youtube, Instagram, Twitter, Zap, FileVideo].map((Icon, idx) => (
             <div key={idx} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <Icon className="w-8 h-8 text-white/50 group-hover:text-blue-400 transition-colors" />
             </div>
          ))}
      </Marquee>
    ),
  },
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="features">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Everything You Need To <br />
            <span className="font-serif italic text-orange-200">Go Viral</span>
          </h2>
          <p className="text-lg text-gray-400">
             Powerful tools wrapped in a simple, beautiful interface designed for modern creators.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative rounded-[2.5rem] overflow-hidden p-6 md:p-8 bg-white/5 border border-white/10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, #93c5fd 10px, #93c5fd 12px)' 
               }} 
          />
          
          <div className="relative z-10">
            <BentoGrid>
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </div>
    </section>
  )
}
