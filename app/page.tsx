"use client"

import React from "react"
import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { HeroSection } from "@/components/landing/HeroSection"
import { MarqueeSection } from "@/components/landing/MarqueeSection"
import { FeaturesSection } from "@/components/landing/FeaturesSection"
import { FeatureShowcase } from "@/components/landing/FeatureShowcase"
import { CtaSection } from "@/components/landing/CtaSection"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-orange-500/30">
      <LandingNavbar />
      <HeroSection />
      <MarqueeSection />
      <FeatureShowcase />
      <FeaturesSection />
      {/* <HowItWorksSection /> - Skipping this one to keep flow minimal or can add later */}
      <CtaSection />
      <LandingFooter />
    </div>
  )
}
