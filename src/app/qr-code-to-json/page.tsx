import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'QR Code to JSON - Free Online Converter ',
  description: 'Decode QR code text data back into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['qr code to json, qr code to json online, qr code to json tool, convert qr code to json, qr code json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
