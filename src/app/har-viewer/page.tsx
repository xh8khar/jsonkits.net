import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HAR Viewer - HTTP Archive File Viewer',
  description: 'View and analyze HTTP Archive (HAR) files with request and response details. 100% free, client-side HAR viewer tool.',
  keywords: ['har viewer', 'har file viewer', 'http archive viewer', 'har analyzer', 'network log viewer', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/har-viewer/' },
  openGraph: {
    title: 'HAR Viewer - HTTP Archive File Viewer',
    description: 'View and analyze HTTP Archive (HAR) files with request and response details. 100% free, client-side HAR viewer tool.',
    url: 'https://www.jsonkits.net/har-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAR Viewer - HTTP Archive File Viewer',
    description: 'View and analyze HTTP Archive (HAR) files with request and response details. 100% free, client-side HAR viewer tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
