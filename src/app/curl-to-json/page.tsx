import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to JSON - Free Online Converter | JSONKits',
  description: 'Extract JSON request bodies from cURL commands. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['curl to json, curl to json online, curl to json tool, convert curl to json, curl json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
