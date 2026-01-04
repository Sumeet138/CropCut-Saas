import React from 'react'
import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
       {/* Background elements */}
       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
            style={{ 
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}>
       </div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

       <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-8">
         <Link href="/landing" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/Cropcut.svg" alt="CropCut Logo" className="h-8 w-auto" />
         </Link>
         
         {children}
         
         <div className="text-center text-xs text-gray-500 mt-4">
             © 2025 CropCut. All rights reserved.
         </div>
       </div>
    </div>
  )
}
