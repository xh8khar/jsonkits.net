import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'QR Code to JSON Converter - Free Online Converter',
  description: 'Decode QR code text data back into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['qr code to json, qr code to json online, qr code to json tool, convert qr code to json, qr code json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/qr-code-to-json/' },
  openGraph: {
    title: 'QR Code to JSON Converter - Free Online Converter',
    description: 'Decode QR code text data back into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/qr-code-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code to JSON Converter - Free Online Converter',
    description: 'Decode QR code text data back into structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
