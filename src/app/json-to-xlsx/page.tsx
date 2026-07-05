import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Excel (XLSX) - Free Online Converter | JSONKits',
  description: 'Convert JSON data to a downloadable Excel XLSX spreadsheet. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to excel (xlsx), json to excel (xlsx) online, json to excel (xlsx) tool, json to xlsx online, json to xlsx tool, json to xlsx, convert json to xlsx, json xlsx converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
