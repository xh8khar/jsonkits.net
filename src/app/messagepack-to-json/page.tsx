import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'MessagePack to JSON Converter - Free Online Converter',
  description: 'Convert MessagePack binary format back into readable JSON format for inspection and debugging. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['messagepack to json, messagepack to json online, messagepack to json tool, convert messagepack to json, messagepack json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/messagepack-to-json/' },
  openGraph: {
    title: 'MessagePack to JSON Converter - Free Online Converter',
    description: 'Convert MessagePack binary format back into readable JSON format for inspection and debugging. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/messagepack-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MessagePack to JSON Converter - Free Online Converter',
    description: 'Convert MessagePack binary format back into readable JSON format for inspection and debugging. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
