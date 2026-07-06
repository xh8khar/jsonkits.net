import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Postman to JSON Converter - Free Online Converter',
  description: 'Extract request definitions from Postman Collection JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['postman to json, postman to json online, postman to json tool, convert postman to json, postman json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
