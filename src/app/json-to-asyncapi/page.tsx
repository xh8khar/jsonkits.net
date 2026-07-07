import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to AsyncAPI Converter - Free Online Converter',
  description: 'Generate AsyncAPI 2.0 channel definitions from JSON data samples for event-driven API documentation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to asyncapi, json to asyncapi online, json to asyncapi tool, convert json to asyncapi, json asyncapi converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-asyncapi/' },
  openGraph: {
    title: 'JSON to AsyncAPI Converter - Free Online Converter',
    description: 'Generate AsyncAPI 2.0 channel definitions from JSON data samples for event-driven API documentation. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-asyncapi/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to AsyncAPI Converter - Free Online Converter',
    description: 'Generate AsyncAPI 2.0 channel definitions from JSON data samples for event-driven API documentation. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
