const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 3000

// Prepare Next.js app - optimized for Node.js 14.21.2
const app = next({ 
  dev, 
  hostname, 
  port,
  // Node 14 compatibility settings
  conf: {
    compress: true,
    poweredByHeader: false
  }
})
const handle = app.getRequestHandler()

console.log(`Starting 456Lab on Node.js ${process.version}`)
console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Add CORS headers for Namecheap compatibility
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      
      // Handle preflight requests
      if (req.method === 'OPTIONS') {
        res.statusCode = 200
        res.end()
        return
      }
      
      // Parse the request URL
      const parsedUrl = parse(req.url, true)
      
      // Handle the request with Next.js
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  .once('error', (err) => {
    console.error('Server error:', err)
    process.exit(1)
  })
  .listen(port, () => {
    console.log(`> 456Lab ready on http://${hostname}:${port}`)
    console.log(`> Visit https://456lab.com to see your website`)
  })
})