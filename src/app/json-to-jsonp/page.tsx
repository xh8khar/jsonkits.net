import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JSONP Converter - Free Online Converter',
  description: 'Convert JSON to JSONP with callback wrapper. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to jsonp, json to jsonp online, json to jsonp tool, convert json to jsonp, json jsonp converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-jsonp/' },
  openGraph: {
    title: 'JSON to JSONP Converter - Free Online Converter',
    description: 'Convert JSON to JSONP with callback wrapper. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-jsonp/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to JSONP Converter - Free Online Converter',
    description: 'Convert JSON to JSONP with callback wrapper. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
