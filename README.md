<div align="center">

# 🎬 CropCut

### AI-Powered Content Creation Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-AI-3448C5)](https://cloudinary.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)](https://clerk.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

![CropCut Logo](/Cropcut.svg)

## 🚀 Overview

CropCut is a cutting-edge SaaS platform that leverages AI to revolutionize content creation. Transform your videos and images with intelligent cropping, automatic social media formatting, and AI-powered enhancements.

## ✨ Features

### 🎥 Video Processing
- **Smart Video Upload**: Upload videos up to 50MB
- **AI-Powered Cropping**: Intelligent content-aware cropping
- **Social Media Ready**: Automatic formatting for different platforms
- **Real-time Preview**: See changes instantly

### 🖼️ Image Processing
- **Multi-Image Upload**: Process multiple images simultaneously
- **AI Enhancement**: Automatic quality improvements
- **Format Conversion**: Convert between different image formats
- **Batch Processing**: Handle multiple files efficiently

### 🎨 Creative Tools
- **Background Removal**: AI-powered background extraction
- **Object Detection**: Smart content recognition
- **Auto-Formatting**: Platform-specific optimizations
- **Quality Enhancement**: Automatic upscaling and improvements

### 💳 Flexible Pricing
- **Credit System**: Pay only for what you use
- **Multiple Tiers**: From free to professional plans
- **Secure Payments**: Razorpay integration
- **Usage Tracking**: Monitor your credit consumption

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (via Prisma)
- **Authentication**: Clerk
- **Media Processing**: Cloudinary AI
- **Payments**: Razorpay
- **UI Components**: shadcn/ui, Radix UI

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Cloudinary account
- Clerk account
- Razorpay account (for payments)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sumeet138/CropCut-Saas.git
   cd CropCut-Saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://..."

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   # Razorpay
   NEXT_PUBLIC_RAZORPAY_KEY_ID=
   RAZORPAY_KEY_SECRET=
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
CropCut-Saas/
├── app/                    # Next.js 14 app directory
│   ├── (auth)/            # Authentication pages
│   ├── (app)/             # Main application pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utility functions
├── prisma/               # Database schema
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🎯 Key Features Explained

### Credit System
- Users start with free credits
- Different operations consume different credit amounts
- Credits can be purchased through various pricing tiers
- Real-time credit balance tracking

### AI Processing
- Powered by Cloudinary's AI capabilities
- Intelligent content analysis
- Automatic optimization
- Format-specific adjustments

### Security
- Secure authentication via Clerk
- Protected API routes
- Secure payment processing
- Data encryption

## 🔄 API Routes

- `/api/video-upload` - Handle video uploads
- `/api/image-upload` - Handle image uploads
- `/api/credits` - Manage user credits
- `/api/payment` - Process payments

## 🎨 Customization

### Styling
- Tailwind CSS for utility-first styling
- shadcn/ui for consistent components
- Custom theme configuration in `tailwind.config.ts`

### Configuration
- Adjust credit costs in the pricing configuration
- Modify upload limits in the API routes
- Customize AI processing parameters in Cloudinary settings

## 📊 Database Schema

The application uses Prisma ORM with the following main models:
- User
- Video
- Image
- Transaction
- Credits

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Cloudinary](https://cloudinary.com/)
- [Clerk](https://clerk.com/)
- [Razorpay](https://razorpay.com/)
- [Prisma](https://www.prisma.io/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📧 Contact

Sumeet - [@Sumeet138](https://github.com/Sumeet138)

Project Link: [https://github.com/Sumeet138/CropCut-Saas](https://github.com/Sumeet138/CropCut-Saas)

---

<div align="center">
Made with ❤️ by Sumeet
</div>
