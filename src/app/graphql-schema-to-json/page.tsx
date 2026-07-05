import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GraphQL Schema to JSON Online — Free JSON Tool | JSONKits',
  description: 'Generate sample JSON data from GraphQL type definitions. 100% client-side and free to use.',
  keywords: ['graphql schema to json, convert graphql schema to json, graphql schema json converter, json converter, graphql schema format, graphql schema parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
