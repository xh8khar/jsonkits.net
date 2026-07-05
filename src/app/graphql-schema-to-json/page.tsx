import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GraphQL Schema to JSON - Free Online Converter | JSONKits',
  description: 'Generate sample JSON data from GraphQL type definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['graphql schema to json, graphql schema to json online, graphql schema to json tool, convert graphql schema to json, graphql schema json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
