import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Log Viewer - Free Online Tool',
  description: 'Parse JSON log entries, extract timestamp, level, and message fields for easy analysis. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json log viewer', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
