import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Barcode to JSON - Free Online Converter ',
  description: 'Extract JSON data from barcode text content. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['barcode to json, barcode to json online, barcode to json tool, convert barcode to json, barcode json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
