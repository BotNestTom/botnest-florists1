
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BotNest for Florists - 24/7 Lead Capture Chatbots',
  description: 'Transform your florist business with AI-powered chatbots that capture leads 24/7. Never miss a customer again.',
  keywords: 'florist chatbot, lead capture, AI assistant, flower shop automation, customer service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/brand/optimized/botnest_favicon_32.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
