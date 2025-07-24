import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '456Lab - 4-Month Training, 5-Star Support, 6-Figure Salary',
  description: 'Transform your IT career with 456Lab. 4-month intensive training, 5-star expert support, achieve 6-figure salary. CCIE, Red Hat, Juniper certifications.',
  keywords: 'CCIE training, Red Hat certification, Juniper networks, IT training, cloud certifications, 456lab, career transformation',
  authors: [{ name: '456Lab' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://456lab.com',
    title: '456Lab - Your Path to 6-Figure IT Career',
    description: '4-Month Training, 5-Star Support, 6-Figure Salary. Professional IT certification training.',
    siteName: '456Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '456Lab Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '456Lab - 4-Month Training, 5-Star Support, 6-Figure Salary',
    description: 'Transform your IT career with expert certification training. CCIE, Red Hat, Juniper, Cloud certifications.',
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎯</text></svg>" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}