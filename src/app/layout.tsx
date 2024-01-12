import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind UI Playground',
  description: 'Practicing with TailwindUI components',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'bg-gradient-to-br from-pink-100/30  via-blue-100/30 to-white/30 bg-no-repeat')}
      >
        <Navbar />
        <div className="h-16 w-full" />
        {children}
      </body>
    </html>
  )
}
