import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to CBOR Converter - Free Online Converter',
  description: 'Convert JSON data to CBOR (Concise Binary Object Representation) format for compact binary encoding. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to cbor, json to cbor online, json to cbor tool, convert json to cbor, json cbor converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
