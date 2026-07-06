import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Excel (XLSX) to JSON Converter - Free Online Converter',
  description: 'Convert Excel XLSX files back into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['excel (xlsx) to json, excel (xlsx) to json online, excel (xlsx) to json tool, xlsx to json online, xlsx to json tool, xlsx to json, convert xlsx to json, xlsx json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
