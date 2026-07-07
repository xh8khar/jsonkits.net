import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to RSS - Convert JSON to RSS Feed',
  description: 'Convert structured JSON data to RSS 2.0 XML feed format for content syndication.',
  keywords: ['json to rss', 'rss generator', 'feed generator', 'rss xml'],
}

export default function Page() {
  return <ToolPageClient />
}
