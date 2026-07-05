import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Excel (XLSX) Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to a downloadable Excel XLSX spreadsheet. 100% client-side and free to use.',
  keywords: ['json to excel (xlsx), convert json to excel (xlsx), json excel (xlsx) converter, excel (xlsx) format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
