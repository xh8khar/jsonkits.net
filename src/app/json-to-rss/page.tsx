import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to RSS - Convert JSON to RSS Feed',
  description: 'Convert structured JSON data to RSS 2.0 XML feed format for content syndication.',
  keywords: ['json to rss', 'rss generator', 'feed generator', 'rss xml'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-rss/' },
  openGraph: {
    title: 'JSON to RSS - Convert JSON to RSS Feed',
    description: 'Convert structured JSON data to RSS 2.0 XML feed format for content syndication.',
    url: 'https://www.jsonkits.net/json-to-rss/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to RSS - Convert JSON to RSS Feed',
    description: 'Convert structured JSON data to RSS 2.0 XML feed format for content syndication.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
