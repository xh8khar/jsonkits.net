import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Key-Value - Free Online Converter ',
  description: 'Convert JSON objects to simple key:value pair lines. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to key-value, json to key-value online, json to key-value tool, json to key value online, json to key value tool, json to key value, convert json to key value, json key value converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-key-value/' },
  openGraph: {
    title: 'JSON to Key-Value - Free Online Converter ',
    description: 'Convert JSON objects to simple key:value pair lines. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-key-value/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Key-Value - Free Online Converter ',
    description: 'Convert JSON objects to simple key:value pair lines. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
