import './globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/seo'

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg">
        <div className="mx-auto max-w-6xl px-4">{children}</div>
      </body>
    </html>
  )
}
