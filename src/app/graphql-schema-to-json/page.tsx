import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'GraphQL Schema to JSON - Free Online Converter ',
  description: 'Generate sample JSON data from GraphQL type definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['graphql schema to json, graphql schema to json online, graphql schema to json tool, convert graphql schema to json, graphql schema json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/graphql-schema-to-json/' },
  openGraph: {
    title: 'GraphQL Schema to JSON - Free Online Converter ',
    description: 'Generate sample JSON data from GraphQL type definitions. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/graphql-schema-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GraphQL Schema to JSON - Free Online Converter ',
    description: 'Generate sample JSON data from GraphQL type definitions. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
