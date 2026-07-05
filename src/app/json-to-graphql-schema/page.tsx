import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GraphQL Schema - Free Online Converter | JSONKits',
  description: 'Generate GraphQL type definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to graphql schema, json to graphql schema online, json to graphql schema tool, convert json to graphql schema, json graphql schema converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
