#!/usr/bin/env node

/**
 * 456Lab - Namecheap Node.js Startup File
 * 
 * This is the main startup file for your 456Lab website on Namecheap hosting.
 * 
 * Setup Instructions:
 * 1. Upload all files to your Namecheap /456lab/ directory
 * 2. Set "Application startup file" to: app.js
 * 3. Run: npm install
 * 4. Start the application
 */

console.log('🎯 Starting 456Lab on Namecheap...')
console.log('📊 Node.js Version:', process.version)
console.log('🌍 Environment:', process.env.NODE_ENV || 'development')

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Configuration for Namecheap hosting
const isDev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = process.env.PORT || 3000

console.log(`🔧 Configuration:`)
console.log(`   - Development mode: ${isDev}`)
console.log(`   - Hostname: ${hostname}`)
console.log(`   - Port: ${port}`)

// Initialize Next.js application
const app = next({ 
  dev: isDev,
  hostname,
  port,
  // Namecheap optimizations
  conf: {
    compress: true,
    poweredByHeader: false,
    generateEtags: false
  }
})

const handle = app.getRequestHandler()

// Startup sequence
console.log('🚀 Initializing 456Lab application...')

app.prepare()
  .then(() => {
    console.log('✅ Next.js application prepared successfully')
    
    // Create HTTP server
    const server = createServer(async (req, res) => {
      try {
        // Log requests in development
        if (isDev) {
          console.log(`📥 ${req.method} ${req.url}`)
        }
        
        // Set security headers for Namecheap
        res.setHeader('X-Powered-By', '456Lab')
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('X-Frame-Options', 'DENY')
        res.setHeader('X-XSS-Protection', '1; mode=block')
        
        // Handle CORS for shared hosting
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        
        // Handle preflight requests
        if (req.method === 'OPTIONS') {
          res.statusCode = 200
          res.end()
          return
        }
        
        // Parse the URL
        const parsedUrl = parse(req.url, true)
        
        // Let Next.js handle the request
        await handle(req, res, parsedUrl)
        
      } catch (error) {
        console.error('❌ Request handling error:', error)
        res.statusCode = 500
        res.setHeader('Content-Type', 'text/html')
        res.end(`
          <html>
            <head><title>456Lab - Server Error</title></head>
            <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
              <h1>🎯 456Lab</h1>
              <h2>Server Error</h2>
              <p>We're experiencing a temporary issue. Please try again in a moment.</p>
              <p><a href="/">Return to Homepage</a></p>
            </body>
          </html>
        `)
      }
    })
    
    // Handle server errors
    server.on('error', (error) => {
      console.error('❌ Server error:', error)
      if (error.code === 'EADDRINUSE') {
        console.error(`⚠️  Port ${port} is already in use`)
        process.exit(1)
      }
    })
    
    // Start the server
    server.listen(port, hostname, () => {
      console.log('🎉 456Lab is now running!')
      console.log(`📍 Local URL: http://${hostname}:${port}`)
      console.log(`🌐 Public URL: https://456lab.com`)
      console.log('⚡ Ready to receive requests...')
      
      // Health check endpoint info
      console.log('\n📋 Available endpoints:')
      console.log('   - / (Homepage)')
      console.log('   - Health check: Server is running')
      console.log('\n💬 Contact: +1 (603) 486-1896')
      console.log('📧 Email: hello@456lab.com')
    })
    
  })
  .catch((error) => {
    console.error('❌ Failed to start 456Lab:', error)
    console.error('🔍 Troubleshooting tips:')
    console.error('   1. Check if all dependencies are installed: npm install')
    console.error('   2. Verify Node.js version: node --version (should be 14.21.2)')
    console.error('   3. Check file permissions')
    console.error('   4. Contact support: hello@456lab.com')
    process.exit(1)
  })

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...')
  process.exit(0)
})

// Catch unhandled errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})