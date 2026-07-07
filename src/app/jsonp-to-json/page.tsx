import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSONP to JSON Converter - Free Online Converter',
  description: 'Extract JSON from JSONP callback wrappers. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jsonp to json, jsonp to json online, jsonp to json tool, convert jsonp to json, jsonp json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/jsonp-to-json/' },
  openGraph: {
    title: 'JSONP to JSON Converter - Free Online Converter',
    description: 'Extract JSON from JSONP callback wrappers. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/jsonp-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSONP to JSON Converter - Free Online Converter',
    description: 'Extract JSON from JSONP callback wrappers. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
