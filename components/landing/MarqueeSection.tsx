"use client"

import React from "react"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Youtube, Video, Film } from "lucide-react"

const platforms = [
  { name: "Instagram Reels", icon: Instagram, ratio: "9:16" },
  { name: "Twitter Media", icon: Twitter, ratio: "16:9" },
  { name: "YouTube", icon: Youtube, ratio: "16:9" },
  { name: "Facebook Feed", icon: Facebook, ratio: "4:5" },
  { name: "TikTok", icon: Video, ratio: "9:16" },
  { name: "YT Shorts", icon: Film, ratio: "9:16" },
]

export const MarqueeSection = () => {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden relative z-20">
      <div className="container mx-auto max-w-5xl relative px-4">
        
        {/* Gradient Masks for "cropped width" effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <div className="flex overflow-hidden group mask-linear-gradient">
          <motion.div
            className="flex gap-16 pr-16"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{ width: "fit-content" }}
          >
            {[...platforms, ...platforms, ...platforms, ...platforms].map((platform, idx) => (
              <div key={idx} className="flex items-center gap-4 text-gray-500 whitespace-nowrap group-hover:text-gray-300 transition-colors">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <platform.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white/80">{platform.name}</span>
                    <span className="text-[10px] font-mono text-orange-400/80 bg-orange-500/10 px-1.5 py-0.5 rounded w-fit">{platform.ratio}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
