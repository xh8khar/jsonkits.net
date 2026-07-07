import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Sitemap to JSON Converter',
  description: 'Parse XML sitemap files and convert to structured JSON with all URL entries.',
  keywords: ['sitemap to json', 'sitemap parser', 'xml sitemap', 'seo tools'],
  alternates: { canonical: 'https://www.jsonkits.net/sitemap-to-json/' },
  openGraph: {
    title: 'Sitemap to JSON Converter',
    description: 'Parse XML sitemap files and convert to structured JSON with all URL entries.',
    url: 'https://www.jsonkits.net/sitemap-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap to JSON Converter',
    description: 'Parse XML sitemap files and convert to structured JSON with all URL entries.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
