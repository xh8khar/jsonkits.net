import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to XML Converter - Free Online Converter',
  description: 'Convert JSON data to XML format for SOAP APIs and legacy systems. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to xml, json to xml online, json to xml tool, convert json to xml, json xml converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-xml/' },
  openGraph: {
    title: 'JSON to XML Converter - Free Online Converter',
    description: 'Convert JSON data to XML format for SOAP APIs and legacy systems. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-xml/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to XML Converter - Free Online Converter',
    description: 'Convert JSON data to XML format for SOAP APIs and legacy systems. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
