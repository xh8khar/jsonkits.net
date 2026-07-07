import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HAR Viewer - HTTP Archive File Viewer',
  description: 'View and analyze HTTP Archive (HAR) files with request and response details. 100% free, client-side HAR viewer tool.',
  keywords: ['har viewer', 'har file viewer', 'http archive viewer', 'har analyzer', 'network log viewer', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
