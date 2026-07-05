import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to URL Parameters Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to URL parameter format. 100% client-side and free to use.',
  keywords: ['json to url parameters, convert json to url parameters, json url parameters converter, url parameters format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
