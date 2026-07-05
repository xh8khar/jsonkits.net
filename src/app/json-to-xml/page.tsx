import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to XML Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to XML format for SOAP APIs and legacy systems. 100% client-side and free to use.',
  keywords: ['json to xml, convert json to xml, json xml converter, xml format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
