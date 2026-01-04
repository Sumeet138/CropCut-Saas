"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react"

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
      },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-52 pb-10 px-4 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div 
            className="absolute -top-64 left-0 w-full h-[140%] bg-cover bg-center bg-no-repeat opacity-80"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Gradient Overlay for Fade Effect at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />
      </div>

      <motion.div
        className="container mx-auto max-w-6xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl"
        >
          Transform Your <br />
          <span className="italic text-white">Content With</span> <br className="md:hidden" />
          <span className="relative inline-block -mt-2 md:-mt-4 align-middle ml-2 md:ml-4">
             <img 
               src="/Cropcut.svg" 
               alt="CropCut" 
               className="h-12 md:h-20 w-auto inline-block opacity-100"
             />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Professional cropping, compression, and resizing tools powered by AI.
          <br />  
          Create viral-ready clips without compromising quality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/home"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center"
          >
            Start Creating Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          
          <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-all duration-300 flex items-center backdrop-blur-md group hover:border-white/20">
            <PlayCircle className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white transition-colors" />
            Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Mockup - Floating & Glassmorphic */}
        <motion.div
          variants={itemVariants}
          className="mt-20 mx-auto max-w-5xl relative"
        >
           {/* Glow behind mockup */}
           <div className="absolute inset-0 bg-orange-600/30 blur-[100px] -z-10 transform translate-y-20 scale-90" />
           
           <div className="relative rounded-2xl border border-white/10 bg-[#111]/80 backdrop-blur-xl p-2 shadow-2xl overflow-hidden group">
              {/* Mockup Top Bar */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                 </div>
                 <div className="mx-auto w-[40%] h-6 bg-white/5 rounded-md" />
              </div>
              
              {/* Mockup Content Area - Placeholder for now */}
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 md:bg-[url('/dashboard-preview.png')] bg-cover bg-center opacity-50" />
                  <div className="text-center z-10">
                     <p className="text-white/20 text-4xl font-serif italic">CropCut Dashboard</p>
                  </div>
              </div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
