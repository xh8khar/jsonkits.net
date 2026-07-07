import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Binary to JSON Converter - Free Online Converter',
  description: 'Convert binary strings back into readable JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['binary to json, binary to json online, binary to json tool, convert binary to json, binary json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/binary-to-json/' },
  openGraph: {
    title: 'Binary to JSON Converter - Free Online Converter',
    description: 'Convert binary strings back into readable JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/binary-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary to JSON Converter - Free Online Converter',
    description: 'Convert binary strings back into readable JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
