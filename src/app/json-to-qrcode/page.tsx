import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to QR Code Online — Free JSON Tool | JSONKits',
  description: 'Generate a QR code image from any JSON data. 100% client-side and free to use.',
  keywords: ['json to qr code, convert json to qr code, json qr code converter, qr code format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
