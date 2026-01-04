"use client"

import axios from "axios"
import React, { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import { Loader2, Upload, Video, CheckCircle2 } from "lucide-react"

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    
    const router = useRouter()
    
    //max size 60 mb
    const MAX_FILE_SIZE = 60 * 1024 * 1024 

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if(!file) return

      if(file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds the maximum limit of 60 MB.")
        return
      }

      setIsUploading(true)
      const formData = new FormData()
      formData.append("file", file)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("originalSize", file.size.toString()) // Fixed typo 'riginalSize' -> 'originalSize'
    
      try {
        const response = await axios.post("/api/video-upload", formData)
        
        if (response.status === 200) {
          toast.success("Video uploaded successfully!")
          // Optional result handling or redirect could go here
          setTimeout(() => {
             router.push("/home")
          }, 1500)
        }
      } catch (error) {
        console.error("Upload error:", error)
        toast.error("Failed to upload video. Please try again.")
      } finally {
        setIsUploading(false)
      }
    }

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
           style: {
             background: '#333',
             color: '#fff',
             border: '1px solid #ffffff10'
           }
        }}
      />
      <div className="max-w-2xl mx-auto py-12 px-4">
        
        <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
             Upload New Video
           </h1>
           <p className="text-gray-400">
             Share your footage with the world. We support common video formats up to 60MB.
           </p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
             
             {/* Title Input */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-300">Video Title</label>
               <input
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                 placeholder="Enter a catchy title..."
                 required
               />
             </div>

             {/* Description Input */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-300">Description</label>
               <textarea
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all min-h-[120px] resize-y"
                 placeholder="What is this video about?"
               />
             </div>

             {/* File Upload Area */}
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-300">Video File</label>
               <div 
                 onClick={() => fileInputRef.current?.click()}
                 className={`
                    border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 group
                    ${file ? 'border-orange-500/50 bg-orange-500/5' : 'border-white/10 hover:border-orange-500/30 hover:bg-white/5'}
                 `}
               >
                 <input
                   type="file"
                   accept="video/*"
                   onChange={(e) => setFile(e.target.files?.[0] || null)}
                   className="hidden"
                   ref={fileInputRef}
                   required={!file} // Only required if no file selected yet
                 />
                 
                 {file ? (
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                         <CheckCircle2 size={24} />
                      </div>
                      <div>
                         <p className="text-sm font-medium text-white break-all max-w-[200px] mx-auto">{file.name}</p>
                         <p className="text-xs text-orange-400 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                      <span className="text-xs text-gray-500 group-hover:text-white transition-colors">Click to change file</span>
                   </div>
                 ) : (
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                         <Video size={24} />
                      </div>
                      <div>
                         <p className="text-sm font-medium text-white">Click to upload video</p>
                         <p className="text-xs text-gray-500 mt-1">MP4, WebM up to 60MB</p>
                      </div>
                   </div>
                 )}
               </div>
             </div>

             {/* Submit Button */}
             <button
               type="submit"
               className="w-full btn bg-orange-600 hover:bg-orange-500 text-white border-0 h-12 rounded-xl text-base font-medium shadow-lg shadow-orange-500/20 disabled:bg-gray-800 disabled:text-gray-500 disabled:shadow-none flex items-center justify-center gap-2"
               disabled={isUploading || !file}
             >
               {isUploading ? (
                 <>
                   <Loader2 className="animate-spin w-5 h-5" />
                   Uploading...
                 </>
               ) : (
                 <>
                   <Upload className="w-5 h-5" />
                   Upload Video
                 </>
               )}
             </button>
           </form>
        </div>
      </div>
    </>
  )
}

export default VideoUpload
