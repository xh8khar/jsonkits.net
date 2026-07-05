import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Convert JSON File Online — Free JSON Tool | JSONKits',
  description: 'Process and analyze JSON file contents with size and type info. 100% client-side and free to use.',
  keywords: ['json converter, convert json, transform json, online json tool, free json tool, json conversion, json formatter, json format, json data, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
