import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Barcode - Free Online Converter | JSONKits',
  description: 'Generate a Code 39 barcode SVG image from your JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to barcode, json to barcode online, json to barcode tool, convert json to barcode, json barcode converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
