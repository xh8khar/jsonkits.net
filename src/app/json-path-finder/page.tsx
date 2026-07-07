import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Path Finder - Find All JSON Paths',
  description: 'Discover all JSONPath expressions for every node in your JSON data structure. 100% free, client-side JSON path finder tool.',
  keywords: ['json path finder', 'jsonpath', 'find json paths', 'jsonpath generator', 'json path explorer', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
