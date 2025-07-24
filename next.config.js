/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true
  },
  // Optimized for both Vercel and Namecheap Node.js deployment
  trailingSlash: true,
  basePath: '',
  // Compatible with shared hosting environments
  experimental: {
    optimizeCss: true
  },
  // Ensure compatibility with Namecheap Node.js
  compress: true,
  poweredByHeader: false
}

module.exports = nextConfig