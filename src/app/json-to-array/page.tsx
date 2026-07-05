import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Object to Array Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to arrays of key-value pair objects. 100% client-side and free to use.',
  keywords: ['json object to array, convert json object to array, json object array converter, array conversion, json object format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
