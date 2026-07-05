import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GraphQL Schema Online — Free JSON Tool | JSONKits',
  description: 'Generate GraphQL type definitions from JSON data samples. 100% client-side and free to use.',
  keywords: ['json to graphql schema, convert json to graphql schema, json graphql schema converter, graphql schema format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
