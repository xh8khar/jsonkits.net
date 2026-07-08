import type { Metadata } from 'next'
import './globals.css'
import AppShell from '@/components/layout/AppShell'
import { ToastProvider } from '@/components/ui/Toast'

const SITE_URL = 'https://www.jsonkits.net'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'JSONKits — Free Online JSON Tools for Developers',
    template: '%s | JSONKits',
  },
  description: 'Free online JSON tools: formatter, validator, converter, viewer, and more. Browser-based JSON utilities. No server upload. 100% private.',
  keywords: ['json tools', 'json formatter', 'json validator', 'json converter', 'json to yaml', 'free json tools'],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'JSONKits',
    title: 'JSONKits — Free Online JSON Tools for Developers',
    description: 'Free online JSON tools: formatter, validator, converter, viewer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSONKits — Free Online JSON Tools',
    description: 'Free online JSON tools: formatter, validator, converter, viewer.',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JSONKits',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description: 'Free online JSON tools: formatter, validator, converter, viewer, and 300+ browser-based JSON utilities. All processing is 100% client-side.',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'JSONKits',
  url: SITE_URL,
  description: 'Free online JSON tools for developers — 300+ browser-based JSON utilities. All processing happens client-side with no server uploads.',
  publisher: { '@type': 'Organization', name: 'JSONKits', url: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <ToastProvider>
          <AppShell>{children}</AppShell>
        </ToastProvider>
      </body>
    </html>
  )
}
