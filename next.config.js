/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true
  },
  // Enable static export for Namecheap deployment
  output: 'export',
  trailingSlash: true,
  basePath: '',
  // Disable features not supported in static export
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig