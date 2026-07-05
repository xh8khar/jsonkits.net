import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Swagger Online — Free JSON Tool | JSONKits',
  description: 'Generate Swagger 2.0 API definitions from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to swagger, convert json to swagger, json swagger converter, swagger format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
