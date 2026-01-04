"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useUser, SignOutButton } from "@clerk/nextjs"
import { LogOut, ChevronDown } from "lucide-react"

// Avatar images available in public/avatars
const AVATARS = [
  "/avatars/avatar-1.png",
  "/avatars/avatar-2.png",
  "/avatars/avatar-3.png",
  "/avatars/avatar-4.png",
]

// Simple hash function to get a consistent avatar index based on userId
const getAvatarIndex = (userId: string): number => {
  let hash = 0
  for (let i = 0; i < userId.length; i++) {
    const char = userId.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash) % AVATARS.length
}

export const LandingNavbar = () => {
  const { scrollY } = useScroll()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  
  const { isSignedIn, user, isLoaded } = useUser()

  // Get a consistent avatar for the user
  const userAvatar = useMemo(() => {
    if (isSignedIn && user?.id) {
      const index = getAvatarIndex(user.id)
      return AVATARS[index]
    }
    return AVATARS[0]
  }, [isSignedIn, user?.id])

  // Get user's first name
  const firstName = user?.firstName || user?.username || "User"

  // Transform width based on scroll position
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"])
  const maxWidth = useTransform(scrollY, [0, 100], ["85rem", "65rem"])
  const y = useTransform(scrollY, [0, 100], [0, 12])

  return (
    <header className="fixed top-2 z-50 w-full flex justify-center px-4">
      <motion.nav
        style={{ width, maxWidth, y }}
        className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg shadow-black/20 transition-all duration-300 ease-out"
        onMouseLeave={() => {
          setHoveredLink(null)
          setShowUserMenu(false)
        }}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0 pl-2">
           <img src="/Cropcut.svg" alt="CropCut" className="h-7 w-auto" />
        </Link>
        
        {/* Centered Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 absolute left-1/2 -translate-x-1/2 border border-white/5">
           {[
             { label: 'Home', href: '/home' },
             { label: 'Social Share', href: '/social-share' },
             { label: 'Video Upload', href: '/video-upload' },
           ].map((item) => (
             <Link
               key={item.label}
               href={item.href}
               className="relative px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
               onMouseEnter={() => setHoveredLink(item.label)}
             >
               {item.label}
               {hoveredLink === item.label && (
                 <motion.div
                   layoutId="navbar-hover"
                   className="absolute inset-0 bg-white/10 rounded-full -z-10"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                 />
               )}
             </Link>
           ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 shrink-0 pr-1">
          {/* Skeleton loader while Clerk is loading */}
          {!isLoaded ? (
             <div className="w-24 h-10 bg-white/5 rounded-full animate-pulse" />
          ) : isSignedIn ? (
            // Logged In State: Avatar + First Name + Menu
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-1 pr-3 py-1 transition-all"
              >
                <img 
                  src={userAvatar} 
                  alt={firstName} 
                  className="w-8 h-8 rounded-full object-cover border-2 border-orange-500/50"
                />
                <span className="text-sm font-medium text-white hidden sm:block">{firstName}</span>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-3 border-b border-white/5">
                     <p className="text-sm font-medium text-white truncate">{user?.fullName || firstName}</p>
                     <p className="text-xs text-gray-500 truncate">{user?.primaryEmailAddress?.emailAddress}</p>
                  </div>
                  <div className="p-1">
                     <SignOutButton>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors">
                           <LogOut size={14} />
                           Sign Out
                        </button>
                     </SignOutButton>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            // Logged Out State: Sign In + Get Started
            <>
              <Link 
                href="/sign-in" 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block px-3 py-2"
              >
                Sign In
              </Link>
              <Link 
                href="/sign-up" 
                className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </motion.nav>
    </header>
  )
}

