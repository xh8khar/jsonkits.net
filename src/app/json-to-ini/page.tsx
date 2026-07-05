import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to INI Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to INI configuration format. 100% client-side and free to use.',
  keywords: ['json to ini, convert json to ini, json ini converter, ini format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
