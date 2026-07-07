import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'RSS to JSON - Convert RSS Feeds to JSON',
  description: 'Parse RSS/Atom feed XML and convert to structured JSON with all feed items and metadata.',
  keywords: ['rss to json', 'feed converter', 'rss parser', 'atom to json'],
}

export default function Page() {
  return <ToolPageClient />
}
