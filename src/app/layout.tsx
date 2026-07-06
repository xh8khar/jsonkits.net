import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ToastProvider } from '@/components/ui/Toast'

export const metadata: Metadata = {
  title: {
    default: 'JSONKits — Free Online JSON Tools for Developers',
    template: '%s | JSONKits',
  },
  description: 'Free online JSON tools: formatter, validator, converter, viewer, and more. Browser-based JSON utilities. No server upload. 100% private.',
  keywords: ['json tools', 'json formatter', 'json validator', 'json converter', 'json to yaml', 'free json tools'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jsonkits.net',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
