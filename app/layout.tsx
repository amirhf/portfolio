import './globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'A&Z Technology Solutions',
      alternateName: 'AandZ.tech',
      url: site.url,
      email: 'hello@aandz.tech',
      founder: { '@type': 'Person', name: 'Amir Firouzmanesh' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Amir Firouzmanesh',
      url: site.url,
      jobTitle: 'Founder and Lead Engineer',
      worksFor: { '@type': 'Organization', name: 'A&Z Technology Solutions' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'AandZ.tech',
      url: site.url,
      email: 'hello@aandz.tech',
      areaServed: 'Worldwide',
      serviceType: [
        'AI product integration',
        'Distributed systems and microservices',
        'Cloud, data, and reporting architecture',
        'Fractional principal engineer support',
      ],
    },
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg">
        {jsonLd.map((item) => (
          <JsonLd key={item['@type']} json={item} />
        ))}
        <div className="mx-auto max-w-6xl px-4">{children}</div>
      </body>
    </html>
  )
}
