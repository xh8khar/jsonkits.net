import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HTML Table to JSON - Free Online Converter | JSONKits',
  description: 'Convert HTML tables to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['html table to json, html table to json online, html table to json tool, convert html table to json, html table json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
