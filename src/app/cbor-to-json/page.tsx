import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'CBOR to JSON Converter - Free Online Converter',
  description: 'Convert CBOR (Concise Binary Object Representation) binary data back into readable JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['cbor to json, cbor to json online, cbor to json tool, convert cbor to json, cbor json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
