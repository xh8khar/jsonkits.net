import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TSV to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert tab-separated values to structured JSON format. 100% client-side and free to use.',
  keywords: ['tsv to json, convert tsv to json, tsv json converter, json converter, tsv format, tsv parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
