import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Protocol Buffers Converter - Free Online Converter',
  description: 'Encode JSON data into Protocol Buffers binary format using a .proto schema definition with base64 output.',
  keywords: ['json to protocol buffers, json to protocol buffers online, json to protocol buffers tool, json to protobuf, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-protobuf/' },
  openGraph: {
    title: 'JSON to Protocol Buffers Converter - Free Online Converter',
    description: 'Encode JSON data into Protocol Buffers binary format using a .proto schema definition with base64 output.',
    url: 'https://www.jsonkits.net/json-to-protobuf/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Protocol Buffers Converter - Free Online Converter',
    description: 'Encode JSON data into Protocol Buffers binary format using a .proto schema definition with base64 output.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
