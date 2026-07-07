import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to JSON Converter - Free Online Converter',
  description: 'Extract JSON request bodies from cURL commands. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['curl to json, curl to json online, curl to json tool, convert curl to json, curl json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/curl-to-json/' },
  openGraph: {
    title: 'cURL to JSON Converter - Free Online Converter',
    description: 'Extract JSON request bodies from cURL commands. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/curl-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cURL to JSON Converter - Free Online Converter',
    description: 'Extract JSON request bodies from cURL commands. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
