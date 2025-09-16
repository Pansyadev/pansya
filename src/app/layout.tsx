import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'PANSYA',
  description: 'Automasi bisnis cerdas dengan workflow n8n profesional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white"> {/* <-- Body class disederhanakan */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}