import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GraphQL Query - Free Online Converter ',
  description: 'Generate GraphQL queries from JSON data structure templates for rapid API development. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to graphql query, json to graphql query online, json to graphql query tool, convert json to graphql query, json graphql query converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
