import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to QR Code Converter - Free Online Converter',
  description: 'Generate a QR code image from any JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to qr code, json to qr code online, json to qr code tool, json to qrcode online, json to qrcode tool, json to qrcode, convert json to qrcode, json qrcode converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
