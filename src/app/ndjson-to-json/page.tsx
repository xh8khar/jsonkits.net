import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'NDJSON to JSON Converter - Free Online Converter',
  description: 'Parse newline-delimited JSON into a JSON array. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['ndjson to json, ndjson to json online, ndjson to json tool, convert ndjson to json, ndjson json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/ndjson-to-json/' },
  openGraph: {
    title: 'NDJSON to JSON Converter - Free Online Converter',
    description: 'Parse newline-delimited JSON into a JSON array. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/ndjson-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NDJSON to JSON Converter - Free Online Converter',
    description: 'Parse newline-delimited JSON into a JSON array. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
