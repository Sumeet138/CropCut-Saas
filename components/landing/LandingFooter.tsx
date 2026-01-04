"use client"

import React from "react"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export const LandingFooter = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-40 relative overflow-hidden font-sans">
      {/* Main Footer Card */}
      <footer className="bg-[#111] border border-white/5 rounded-[2rem] p-6 md:px-12 md:py-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-10">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              {/* SVG Logo */}
              <img 
                src="/Cropcut.svg" 
                alt="CropCut Logo" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
              CropCut empowers creators to transform raw footage into viral clips — making storytelling easier to share, understand, and monetize.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white tracking-widest uppercase">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/legal" className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">Documentation</a>
                </li>
                <li>
                  <a href="/legal" className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">Privacy Policy</a>
                </li>
                <li>
                  <a href="/legal" className="text-sm text-gray-500 hover:text-orange-400 transition-colors font-medium">Terms of Service</a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col gap-4 text-center md:text-left">
               <h4 className="text-sm font-bold text-white tracking-widest uppercase">CONNECT</h4>
               <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/Sumeet138/CropCut-Saas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all shadow-lg hover:shadow-orange-500/10">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="mailto:sumitv9009@gmail.com" className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all shadow-lg hover:shadow-orange-500/10">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/SumitGond28" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all shadow-lg hover:shadow-orange-500/10">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/sumeetgond/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all shadow-lg hover:shadow-orange-500/10">
                    <Linkedin className="w-5 h-5" />
                  </a>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © 2025 CropCut. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Large Fading Text Background - Outside the Card, at the bottom of the wrapper */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="text-[14rem] md:text-[18rem] font-bold text-orange-500/10 leading-none tracking-tighter whitespace-nowrap translate-y-[35%]"
          style={{
            maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
        >
          CropCut
        </span>
      </div>
    </div>
  )
}
