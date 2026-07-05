import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TSV Online — Free JSON Tool | JSONKits',
  description: 'Transform JSON arrays into tab-separated values. 100% client-side and free to use.',
  keywords: ['json to tsv, convert json to tsv, json tsv converter, tsv format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
