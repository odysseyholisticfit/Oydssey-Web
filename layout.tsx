import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Odyssey Holistic',
  description: 'Odyssey is a return to the whole.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <Nav />
        <main className="min-h-[calc(100vh-4rem)] bg-[image:var(--tw-gradient-stops)]">
          <div className="bg-parchment">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
