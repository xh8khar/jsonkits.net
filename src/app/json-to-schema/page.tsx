import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Schema - Free Online Converter ',
  description: 'Generate a JSON Schema draft-07 from JSON data sample. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to schema, json to schema online, json to schema tool, convert json to schema, json schema converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-schema/' },
  openGraph: {
    title: 'JSON to Schema - Free Online Converter ',
    description: 'Generate a JSON Schema draft-07 from JSON data sample. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-schema/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Schema - Free Online Converter ',
    description: 'Generate a JSON Schema draft-07 from JSON data sample. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
