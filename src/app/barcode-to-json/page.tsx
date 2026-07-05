import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Barcode to JSON Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON data from barcode text content. 100% client-side and free to use.',
  keywords: ['barcode to json, convert barcode to json, barcode json converter, json converter, barcode format, barcode parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
