import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Word Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to a downloadable Word document format. 100% client-side and free to use.',
  keywords: ['json to word, convert json to word, json word converter, word format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
