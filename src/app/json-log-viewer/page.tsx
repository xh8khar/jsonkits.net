import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Log Viewer - Free Online Tool',
  description: 'Parse JSON log entries, extract timestamp, level, and message fields for easy analysis. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json log viewer', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-log-viewer/' },
  openGraph: {
    title: 'JSON Log Viewer - Free Online Tool',
    description: 'Parse JSON log entries, extract timestamp, level, and message fields for easy analysis. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-log-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Log Viewer - Free Online Tool',
    description: 'Parse JSON log entries, extract timestamp, level, and message fields for easy analysis. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
