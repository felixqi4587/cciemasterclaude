import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CCIE Master - Pass Your CCIE First Try | 95% Success Rate',
  description: 'Transform your IT career with our advanced CCIE training program. 4-month service period, real exam questions, 8 hours daily support. Join 10,000+ successful professionals.',
  keywords: 'CCIE training, CCDE certification, Cisco certification, IT training, network engineer, enterprise infrastructure, security, data center, service provider',
  authors: [{ name: 'CCIE Master' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://cciemaster.com',
    title: 'CCIE Master - #1 CCIE Training with 95% Pass Rate',
    description: 'Transform your career with CCIE Master\'s expert training. 4-month service period, 8 hours daily support, real lab access.',
    siteName: 'CCIE Master',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CCIE Master Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCIE Master - #1 CCIE Training with 95% Pass Rate',
    description: 'Transform your IT career with expert CCIE training. 4-month service, 8 hours daily support, real labs.',
    images: ['/twitter-card.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}