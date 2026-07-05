import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to XSD - Free Online Converter | JSONKits',
  description: 'Generate XML Schema Definition (XSD) from JSON data samples for enterprise XML data validation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to xsd, json to xsd online, json to xsd tool, convert json to xsd, json xsd converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
