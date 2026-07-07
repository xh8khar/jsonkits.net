import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Parser - Parse and Analyze JSON Structure',
  description: 'Parse JSON data and get detailed structure information including type, depth, and key count. 100% free, client-side JSON parser tool with no server uploads.',
  keywords: ['json parser', 'parse json online', 'json structure analyzer', 'json analysis tool', 'json depth checker', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
