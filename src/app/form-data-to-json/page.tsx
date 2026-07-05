import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Form Data to JSON - Free Online Converter | JSONKits',
  description: 'Parse form data back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['form data to json, form data to json online, form data to json tool, convert form data to json, form data json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
