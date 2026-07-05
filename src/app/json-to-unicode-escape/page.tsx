import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Unicode Escape Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to Unicode escape sequences. 100% client-side and free to use.',
  keywords: ['json to unicode escape, convert json to unicode escape, json unicode escape converter, unicode escape format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
