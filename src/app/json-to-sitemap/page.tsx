import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Sitemap Generator',
  description: 'Convert JSON sitemap data to XML sitemap format for search engine indexing.',
  keywords: ['json to sitemap', 'sitemap generator', 'xml sitemap', 'seo sitemap'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-sitemap/' },
  openGraph: {
    title: 'JSON to Sitemap Generator',
    description: 'Convert JSON sitemap data to XML sitemap format for search engine indexing.',
    url: 'https://www.jsonkits.net/json-to-sitemap/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Sitemap Generator',
    description: 'Convert JSON sitemap data to XML sitemap format for search engine indexing.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
