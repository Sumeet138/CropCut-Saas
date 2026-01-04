"use client"

import React from "react"

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How It Works</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 dashed" />

          {[
            {
              step: "01",
              title: "Upload",
              desc: "Drag & drop your video files directly into the browser.",
            },
            {
              step: "02",
              title: "Customize",
              desc: "Choose your compression level and target social format.",
            },
            {
              step: "03",
              title: "Download",
              desc: "Get your optimized file instantly, ready to post.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-base-100 border-4 border-base-200 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-black text-primary">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-base-content/70 px-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
