import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'QR Code to JSON Online — Free JSON Tool | JSONKits',
  description: 'Decode QR code text data back into structured JSON format. 100% client-side and free to use.',
  keywords: ['qr code to json, convert qr code to json, qr code json converter, json converter, qr code format, qr code parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
