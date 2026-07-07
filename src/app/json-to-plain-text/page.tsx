import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Plain Text Converter - Free Online Converter',
  description: 'Flatten JSON objects into plain key: value text. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to plain text, json to plain text online, json to plain text tool, convert json to plain text, json plain text converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-plain-text/' },
  openGraph: {
    title: 'JSON to Plain Text Converter - Free Online Converter',
    description: 'Flatten JSON objects into plain key: value text. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-plain-text/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Plain Text Converter - Free Online Converter',
    description: 'Flatten JSON objects into plain key: value text. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
