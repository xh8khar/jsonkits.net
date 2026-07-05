import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SOAP XML - Free Online Converter | JSONKits',
  description: 'Convert JSON data to SOAP XML envelope format for enterprise web service integration. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to soap xml, json to soap xml online, json to soap xml tool, json to soap online, json to soap tool, json to soap, convert json to soap, json soap converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
