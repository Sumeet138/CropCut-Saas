"use client"

import React, { useState } from "react"
import { LandingNavbar } from "@/components/landing/LandingNavbar"
import { LandingFooter } from "@/components/landing/LandingFooter"
import { motion } from "framer-motion"
import { FileText, Shield, Book } from "lucide-react"
import { cn } from "@/lib/utils"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"docs" | "privacy" | "terms">("docs")

  const tabs = [
    { id: "docs", label: "Documentation", icon: Book },
    { id: "privacy", label: "Privacy Policy", icon: Shield },
    { id: "terms", label: "Terms of Service", icon: FileText },
  ] as const

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">
      <LandingNavbar />
      
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Legal & </span>
            <span className="text-orange-500 italic font-serif">Resources</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about using CropCut, our policies, and how to get the most out of our platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Nav */}
          <div className="w-full lg:w-64 shrink-0 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium",
                  activeTab === tab.id
                    ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-h-[600px] bg-white/5 rounded-2xl border border-white/5 p-8 md:p-12 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
               className="relative z-10"
             >
                {activeTab === "docs" && <DocumentationContent />}
                {activeTab === "privacy" && <PrivacyContent />}
                {activeTab === "terms" && <TermsContent />}
             </motion.div>
          </div>
        </div>
      </div>

      <LandingFooter />
    </main>
  )
}

const DocumentationContent = () => (
  <div className="prose prose-invert max-w-none">
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Book className="w-6 h-6 text-orange-500" />
        Documentation
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed mb-6">
      Welcome to the CropCut documentation. Here you&apos;ll find comprehensive guides and documentation to help you start working with CropCut as quickly as possible, as well as support if you get stuck.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors cursor-pointer group">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Getting Started</h3>
            <p className="text-sm text-gray-400">Learn the basics of CropCut, from setting up your account to your first export.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors cursor-pointer group">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Video Processing</h3>
            <p className="text-sm text-gray-400">Deep dive into our smart compression, cropping, and resizing algorithms.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors cursor-pointer group">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">API Reference</h3>
            <p className="text-sm text-gray-400">Detailed API documentation for developers integrating CropCut.</p>
        </div>
         <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors cursor-pointer group">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">Troubleshooting</h3>
            <p className="text-sm text-gray-400">Common issues and how to resolve them quickly.</p>
        </div>
    </div>
  </div>
)

const PrivacyContent = () => (
    <div className="prose prose-invert max-w-none text-gray-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Shield className="w-6 h-6 text-orange-500" />
          Privacy Policy
      </h2>
      <p className="mb-4">Last Updated: January 4, 2026</p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Introduction</h3>
      <p className="mb-4">
        CropCut (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our video processing services.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h3>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Personal Data:</strong> Name, email address, and payment information when you register.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, including access times, pages viewed, and IP address.</li>
        <li><strong>Content Data:</strong> Videos and images you upload for processing. We process these files solely for the purpose of providing our service and do not claim ownership.</li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Data Security</h3>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help protect your personal information. Your uploaded content is processed securely and deleted from our servers after the retention period (usually 24 hours).
      </p>
    </div>
)

const TermsContent = () => (
    <div className="prose prose-invert max-w-none text-gray-300">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <FileText className="w-6 h-6 text-orange-500" />
          Terms of Service
      </h2>
      <p className="mb-4">Last Updated: January 4, 2026</p>
      
      <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h3>
      <p className="mb-4">
        By accessing or using CropCut, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
      </p>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Use License</h3>
      <p className="mb-4">
        Permission is granted to temporarily use CropCut for personal or commercial video processing tasks. This is the grant of a license, not a transfer of title.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>You may not use the service for any illegal purpose.</li>
          <li>You may not attempt to reverse engineer any software contained on CropCut&apos;s website.</li>
          <li>We reserve the right to terminate your license if you violate any of these restrictions.</li>
      </ul>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h3>
      <p className="mb-4">
        The materials on CropCut&apos;s website are provided on an &apos;as is&apos; basis. CropCut makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
      </p>
    </div>
)
