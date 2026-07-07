import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Bookmarks to JSON - HTML Bookmarks Converter',
  description: 'Extract bookmarks from HTML bookmark export files into structured JSON format.',
  keywords: ['bookmarks to json', 'html bookmarks to json', 'bookmark converter', 'bookmark extractor', 'bookmarks parser'],
  alternates: { canonical: 'https://www.jsonkits.net/bookmarks-to-json/' },
  openGraph: {
    title: 'Bookmarks to JSON - HTML Bookmarks Converter',
    description: 'Extract bookmarks from HTML bookmark export files into structured JSON format.',
    url: 'https://www.jsonkits.net/bookmarks-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookmarks to JSON - HTML Bookmarks Converter',
    description: 'Extract bookmarks from HTML bookmark export files into structured JSON format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
