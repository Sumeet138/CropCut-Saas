import React from "react"
import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-orange-500/30">
      <LandingNavbar />
      <main className="pt-32">
        {children}
      </main>
      <LandingFooter />
    </div>
  )
}
