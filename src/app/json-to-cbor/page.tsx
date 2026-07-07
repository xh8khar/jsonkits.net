import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to CBOR Converter - Free Online Converter',
  description: 'Convert JSON data to CBOR (Concise Binary Object Representation) format for compact binary encoding. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to cbor, json to cbor online, json to cbor tool, convert json to cbor, json cbor converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-cbor/' },
  openGraph: {
    title: 'JSON to CBOR Converter - Free Online Converter',
    description: 'Convert JSON data to CBOR (Concise Binary Object Representation) format for compact binary encoding. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-cbor/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to CBOR Converter - Free Online Converter',
    description: 'Convert JSON data to CBOR (Concise Binary Object Representation) format for compact binary encoding. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
