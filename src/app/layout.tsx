import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Desa Bontobunga - Website Resmi',
  description: 'Website resmi Desa Bontobunga - Informasi, Berita, dan Layanan Masyarakat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 min-h-screen">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
} 