import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to DynamoDB - Free Online Converter | JSONKits',
  description: 'Convert JSON data to Amazon DynamoDB JSON format with typed attribute values. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to dynamodb, json to dynamodb online, json to dynamodb tool, convert json to dynamodb, json dynamodb converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
