import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Form Data - Free Online Converter ',
  description: 'Convert JSON objects to URL-encoded form data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to form data, json to form data online, json to form data tool, convert json to form data, json form data converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
