import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to XML - Free Online Converter | JSONKits',
  description: 'Convert JSON data to XML format for SOAP APIs and legacy systems. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to xml, json to xml online, json to xml tool, convert json to xml, json xml converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
