import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PHP Array Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to PHP array syntax. 100% client-side and free to use.',
  keywords: ['json to php array, convert json to php array, json php array converter, php array format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
