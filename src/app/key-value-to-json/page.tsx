import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Key-Value to JSON Converter - Free Online Converter',
  description: 'Parse key:value pair lines into structured JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['key-value to json, key-value to json online, key-value to json tool, key value to json online, key value to json tool, key value to json, convert key value to json, key value json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/key-value-to-json/' },
  openGraph: {
    title: 'Key-Value to JSON Converter - Free Online Converter',
    description: 'Parse key:value pair lines into structured JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/key-value-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key-Value to JSON Converter - Free Online Converter',
    description: 'Parse key:value pair lines into structured JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
