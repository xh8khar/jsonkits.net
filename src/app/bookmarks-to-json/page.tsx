import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Bookmarks to JSON - HTML Bookmarks Converter',
  description: 'Extract bookmarks from HTML bookmark export files into structured JSON format.',
  keywords: ['bookmarks to json', 'html bookmarks to json', 'bookmark converter', 'bookmark extractor', 'bookmarks parser'],
}

export default function Page() {
  return <ToolPageClient />
}
