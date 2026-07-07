import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Graph Viewer - Visualize JSON Structure',
  description: 'View JSON data as an ASCII tree graph showing the nested structure with Unicode connectors. 100% free, client-side JSON graph viewer.',
  keywords: ['json graph viewer', 'json tree viewer', 'json structure viewer', 'json visualization', 'json tree graph', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
