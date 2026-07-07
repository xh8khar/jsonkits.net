import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to README Converter - Free Online Converter',
  description: 'Convert JSON data to a structured README document. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to readme, json to readme online, json to readme tool, convert json to readme, json readme converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-readme/' },
  openGraph: {
    title: 'JSON to README Converter - Free Online Converter',
    description: 'Convert JSON data to a structured README document. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-readme/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to README Converter - Free Online Converter',
    description: 'Convert JSON data to a structured README document. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
