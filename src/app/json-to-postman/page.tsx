import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Postman Online — Free JSON Tool | JSONKits',
  description: 'Generate Postman Collection v2.1 from JSON request definitions. 100% client-side and free to use.',
  keywords: ['json to postman, convert json to postman, json postman converter, postman format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
