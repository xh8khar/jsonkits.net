import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Timestamp Converter - Free Online Tool',
  description: 'Detect and convert all timestamps in JSON between Unix, ISO 8601, and locale formats. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json timestamp converter', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
