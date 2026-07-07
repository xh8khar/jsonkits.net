import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Hex Converter - Free Online Converter',
  description: 'Convert JSON data to hexadecimal string representation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to hex, json to hex online, json to hex tool, convert json to hex, json hex converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-hex/' },
  openGraph: {
    title: 'JSON to Hex Converter - Free Online Converter',
    description: 'Convert JSON data to hexadecimal string representation. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-hex/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Hex Converter - Free Online Converter',
    description: 'Convert JSON data to hexadecimal string representation. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
