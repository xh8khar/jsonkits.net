import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GraphQL Mutation - Free Online Converter ',
  description: 'Generate GraphQL mutation definitions from JSON data structure templates for API development.',
  keywords: ['json to graphql mutation, json to graphql mutation online, json to graphql mutation tool, json to graphql mutation, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
