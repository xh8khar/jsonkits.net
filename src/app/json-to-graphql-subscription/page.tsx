import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to GraphQL Subscription - Free Online Converter ',
  description: 'Generate GraphQL subscription definitions from JSON data structure templates for real-time APIs.',
  keywords: ['json to graphql subscription, json to graphql subscription online, json to graphql subscription tool, json to graphql subscription, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
