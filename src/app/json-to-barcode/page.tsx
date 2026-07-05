import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Barcode Online — Free JSON Tool | JSONKits',
  description: 'Generate a Code 39 barcode SVG image from your JSON data. 100% client-side and free to use.',
  keywords: ['json to barcode, convert json to barcode, json barcode converter, barcode format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
