import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to HTML Table Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to an HTML table. 100% client-side and free to use.',
  keywords: ['json to html table, convert json to html table, json html table converter, html table format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
