import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Form Data Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to URL-encoded form data. 100% client-side and free to use.',
  keywords: ['json to form data, convert json to form data, json form data converter, form data format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
