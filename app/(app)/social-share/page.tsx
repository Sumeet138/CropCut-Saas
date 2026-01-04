"use client"
import React, { useRef, useEffect, useState } from "react"
import { CldImage } from "next-cloudinary"
import { Loader2, Upload, Download, Image as ImageIcon, Check } from "lucide-react"

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
}

type SocialFormat = keyof typeof socialFormats

export default function SocialShare() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [selectedFormat, setSelectedFormat] = useState<SocialFormat>(
    "Instagram Square (1:1)"
  )
  const [isUploading, setIsUploading] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true)
    }
  }, [selectedFormat, uploadedImage])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setIsUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Failed to Upload Image")

      const data = await response.json()
      setUploadedImage(data.public_id)
    } catch (error) {
      console.log(error)
      alert("Failed to upload Image")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDownload = () => {
    if (!imageRef.current) return

    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = `${selectedFormat
          .replace(/\s+/g, "_")
          .toLowerCase()}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Header */}
      <div className="text-center mb-12">
         <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
           Social Media Image Creator
         </h1>
         <p className="text-gray-400 max-w-2xl mx-auto">
           Upload your image and automatically format it for any social media platform with optimized dimensions and cropping.
         </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
         {/* Controls Section */}
         <div className="space-y-8">
            {/* Upload Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden relative group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[60px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
               
               <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Upload size={18} />
                  </div>
                  Upload Image
               </h2>

               <div 
                 onClick={() => fileInputRef.current?.click()}
                 className={`
                    border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
                    ${isUploading ? 'border-orange-500/50 bg-orange-500/5' : 'border-white/10 hover:border-orange-500/30 hover:bg-white/5'}
                 `}
               >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept="image/*"
                  />
                  
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-3 py-4">
                       <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                       <span className="text-sm text-gray-400">Uploading your image...</span>
                    </div>
                  ) : (
                     <div className="flex flex-col items-center gap-3 py-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-2">
                           <ImageIcon size={24} />
                        </div>
                        <span className="text-sm font-medium text-white">Click to upload</span>
                        <span className="text-xs text-gray-500">JPG, PNG up to 10MB</span>
                     </div>
                  )}
               </div>
            </div>

            {/* Format Selection - Only show if uploaded */}
            {uploadedImage && (
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-xl">
                 <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <ImageIcon size={18} />
                    </div>
                    Select Format
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.keys(socialFormats).map((format) => (
                      <button
                        key={format}
                        onClick={() => setSelectedFormat(format as SocialFormat)}
                        className={`
                          relative p-4 rounded-xl text-left transition-all duration-200 border
                          ${selectedFormat === format 
                             ? 'bg-white/10 border-orange-500/50 text-white shadow-[0_0_15px_rgba(249,115,22,0.1)]' 
                             : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'}
                        `}
                      >
                         <span className="text-sm font-medium block pr-6">{format}</span>
                         <span className="text-xs text-gray-500 mt-1 block">
                            {socialFormats[format as SocialFormat].width} x {socialFormats[format as SocialFormat].height}
                         </span>
                         {selectedFormat === format && (
                            <Check className="absolute top-4 right-4 w-4 h-4 text-orange-500" />
                         )}
                      </button>
                    ))}
                 </div>
              </div>
            )}
         </div>

         {/* Preview Section */}
         <div className="lg:sticky lg:top-32">
            <div className={`
               bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative min-h-[400px] flex flex-col
               ${!uploadedImage && 'items-center justify-center text-center'}
            `}>
               {!uploadedImage ? (
                  <div className="text-gray-500">
                     <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5 border-dashed">
                        <ImageIcon size={32} className="opacity-50" />
                     </div>
                     <p>Upload an image to see the preview</p>
                  </div>
               ) : (
                  <>
                     <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-white">Preview</h3>
                        <div className="flex gap-2">
                           <button 
                             onClick={handleDownload}
                             className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-colors"
                           >
                              <Download size={16} />
                              Download
                           </button>
                        </div>
                     </div>

                     <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-white/5 flex items-center justify-center bg-[url('/bg-grid.svg')]">
                         {isTransforming && (
                           <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                              <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                           </div>
                         )}
                         <CldImage
                           width={socialFormats[selectedFormat].width}
                           height={socialFormats[selectedFormat].height}
                           src={uploadedImage}
                           sizes="100vw"
                           alt="transformed image"
                           crop="fill"
                           aspectRatio={socialFormats[selectedFormat].aspectRatio}
                           gravity='auto'
                           ref={imageRef}
                           onLoad={() => setIsTransforming(false)}
                           className="max-w-full h-auto object-contain max-h-[600px]"
                         />
                     </div>
                     
                     <div className="mt-4 text-center text-xs text-gray-500">
                        {socialFormats[selectedFormat].aspectRatio} aspect ratio • Auto-cropped to fit
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
    </div>
  )
}
