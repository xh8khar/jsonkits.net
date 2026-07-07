import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Properties Converter - Free Online Converter',
  description: 'Convert JSON to Java .properties format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to properties, json to properties online, json to properties tool, convert json to properties, json properties converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-properties/' },
  openGraph: {
    title: 'JSON to Properties Converter - Free Online Converter',
    description: 'Convert JSON to Java .properties format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-properties/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Properties Converter - Free Online Converter',
    description: 'Convert JSON to Java .properties format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
