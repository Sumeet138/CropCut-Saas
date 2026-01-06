<div align="center">

# 🎬 CropCut

### AI-Powered Content Creation Platform for Modern Creators

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://cropcut.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://cropcut.vercel.app) • [📖 Documentation](#documentation) • [🚀 Getting Started](#getting-started) • [💬 Support](#support)

![CropCut Banner](https://via.placeholder.com/1200x400/050505/FFFFFF?text=CropCut+-+AI+Content+Creation+Platform)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 About

**CropCut** is a modern SaaS platform designed for content creators who need quick, intelligent thumbnail generation and video processing. Built with cutting-edge technologies, CropCut leverages AI-powered content-aware cropping to help creators produce eye-catching thumbnails and optimize their video content effortlessly.

### 🎪 Why CropCut?

- ⚡ **Lightning Fast** - Process videos and generate thumbnails in seconds
- 🤖 **AI-Powered** - Smart content-aware cropping algorithms
- 🎨 **Professional Quality** - Studio-grade output for your content
- 📱 **Responsive** - Works seamlessly across all devices
- 🔐 **Secure** - Enterprise-grade authentication with Clerk

---

## ✨ Key Features

<details open>
<summary><b>Core Capabilities</b></summary>

- 🎬 **Video Processing**
  - Video upload and compression
  - Multiple format support
  - Real-time processing status
  - Size optimization

- 🖼️ **Thumbnail Generation**
  - AI-powered content-aware cropping
  - Multiple aspect ratio support
  - Batch processing
  - High-resolution output

- 👤 **User Management**
  - Secure authentication via Clerk
  - User dashboard
  - Usage analytics
  - Project management

- 📊 **Analytics & Tracking**
  - File size tracking
  - Processing history
  - Performance metrics
  - Usage statistics

</details>

<details>
<summary><b>Advanced Features</b></summary>

- 🌐 **Cloud Storage Integration**
  - Cloudinary integration
  - Automatic CDN delivery
  - Optimized asset delivery
  - Secure file management

- 🎨 **Modern UI/UX**
  - Dark theme optimized
  - Smooth animations with Framer Motion
  - Responsive design
  - Intuitive workflow

- 🔧 **Developer Experience**
  - Type-safe with TypeScript
  - Modern React patterns
  - API-first architecture
  - Hot module replacement

</details>

---

## 🛠️ Tech Stack

<details open>
<summary><b>Frontend</b></summary>

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.1 | React framework with SSR/SSG |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.17 | Utility-first CSS |
| [DaisyUI](https://daisyui.com/) | 5.5.5 | Component library |
| [Framer Motion](https://www.framer.com/motion/) | 12.23.26 | Animations |
| [Lucide React](https://lucide.dev/) | 0.562.0 | Icons |

</details>

<details>
<summary><b>Backend & Infrastructure</b></summary>

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Prisma](https://www.prisma.io/) | 7.2.0 | ORM for database |
| [PostgreSQL](https://www.postgresql.org/) | Latest | Database |
| [Clerk](https://clerk.com/) | 6.36.5 | Authentication |
| [Cloudinary](https://cloudinary.com/) | 2.8.0 | Media management |
| [Axios](https://axios-http.com/) | 1.13.2 | HTTP client |

</details>

<details>
<summary><b>Developer Tools</b></summary>

- ESLint for code linting
- PostCSS for CSS processing
- Day.js for date manipulation
- React Hot Toast for notifications
- File size utilities

</details>

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** / **yarn** / **pnpm** / **bun**
- **PostgreSQL** (v14 or higher)
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Sumeet138/CropCut-Saas.git
cd CropCut-Saas
```

2. **Install dependencies**

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

### Environment Variables

<details>
<summary><b>Required Environment Variables</b></summary>

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/cropcut?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

</details>

### Database Setup

1. **Generate Prisma Client**

```bash
npm run prisma:generate
# or
npx prisma generate
```

2. **Run database migrations**

```bash
npx prisma migrate dev --name init
```

3. **Seed the database (optional)**

```bash
npx prisma db seed
```

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 💻 Usage

<details>
<summary><b>Quick Start Guide</b></summary>

1. **Sign Up / Sign In**
   - Navigate to the homepage
   - Click "Get Started" or "Sign In"
   - Complete authentication via Clerk

2. **Upload Video**
   - Go to your dashboard
   - Click "Upload Video"
   - Select your video file
   - Add title and description

3. **Generate Thumbnails**
   - Select uploaded video
   - Choose aspect ratio
   - Click "Generate Thumbnail"
   - Download or share

4. **Manage Content**
   - View all your uploads
   - Track processing status
   - Download processed files
   - Manage storage

</details>

---

## 📁 Project Structure

```
CropCut-Saas/
├── app/                          # Next.js app directory
│   ├── (app)/                    # Protected app routes
│   │   ├── dashboard/            # User dashboard
│   │   ├── video-upload/         # Video upload page
│   │   └── social-share/         # Social sharing features
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page
│   ├── api/                      # API routes
│   │   ├── video-upload/         # Video upload endpoint
│   │   ├── image-upload/         # Image upload endpoint
│   │   └── webhooks/             # Webhook handlers
│   ├── legal/                    # Legal pages
│   │   ├── privacy/              # Privacy policy
│   │   └── terms/                # Terms of service
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── landing/                  # Landing page components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FeatureShowcase.tsx
│   │   └── CtaSection.tsx
│   ├── ui/                       # Reusable UI components
│   └── shared/                   # Shared components
├── lib/                          # Utility functions
│   ├── cloudinary.ts             # Cloudinary helpers
│   └── utils.ts                  # General utilities
├── prisma/                       # Prisma configuration
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Database migrations
├── public/                       # Static assets
│   ├── images/
│   └── icons/
├── types/                        # TypeScript type definitions
├── middleware.ts                 # Next.js middleware
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Project dependencies
```

---

## 📡 API Documentation

<details>
<summary><b>Video Upload API</b></summary>

### POST `/api/video-upload`

Upload and process a video file.

**Request:**
```typescript
{
  file: File;
  title: string;
  description?: string;
}
```

**Response:**
```typescript
{
  id: string;
  title: string;
  publicId: string;
  originalSize: string;
  compressedSize: string;
  duration: number;
  createdAt: string;
}
```

</details>

<details>
<summary><b>Image Upload API</b></summary>

### POST `/api/image-upload`

Upload an image for thumbnail generation.

**Request:**
```typescript
{
  file: File;
  aspectRatio?: string;
}
```

**Response:**
```typescript
{
  url: string;
  publicId: string;
  width: number;
  height: number;
}
```

</details>

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sumeet138/CropCut-Saas)

1. Click the "Deploy to Vercel" button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

<details>
<summary><b>Manual Deployment</b></summary>

1. **Build the application**

```bash
npm run build
```

2. **Set up your PostgreSQL database**
   - Use [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or any PostgreSQL provider
   - Update `DATABASE_URL` in your environment

3. **Configure environment variables on Vercel**
   - Go to Project Settings → Environment Variables
   - Add all required variables

4. **Deploy**

```bash
vercel --prod
```

</details>

### Other Platforms

<details>
<summary><b>Docker Deployment</b></summary>

```dockerfile
# Coming soon - Docker configuration
```

</details>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

<details>
<summary><b>How to Contribute</b></summary>

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

</details>

<details>
<summary><b>Development Guidelines</b></summary>

- Follow the existing code style
- Write meaningful commit messages
- Update documentation for new features
- Add tests for new functionality
- Ensure all tests pass before submitting PR

</details>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

<div align="center">

### Need Help?

[![GitHub Issues](https://img.shields.io/github/issues/Sumeet138/CropCut-Saas?style=for-the-badge)](https://github.com/Sumeet138/CropCut-Saas/issues)
[![GitHub Discussions](https://img.shields.io/badge/discussions-join-blue?style=for-the-badge)](https://github.com/Sumeet138/CropCut-Saas/discussions)

- 🐛 **Found a bug?** [Open an issue](https://github.com/Sumeet138/CropCut-Saas/issues/new)
- 💡 **Have a feature request?** [Start a discussion](https://github.com/Sumeet138/CropCut-Saas/discussions/new)
- 📧 **Email:** [Contact the maintainer](mailto:your-email@example.com)

</div>

---

## 🌟 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting Platform
- [Clerk](https://clerk.com/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Media Management
- [Prisma](https://www.prisma.io/) - Database ORM

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by [Sumeet138](https://github.com/Sumeet138)

[⬆ Back to Top](#-cropcut)

</div>