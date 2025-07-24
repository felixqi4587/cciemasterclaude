/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true
  },
  // Enable static export for backup deployment
  trailingSlash: true,
  // Optimized for Vercel deployment
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig