import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MongoDB Aggregation - Free Online Converter ',
  description: 'Generate MongoDB aggregation pipeline stages from JSON data queries for database operations. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mongodb aggregation, json to mongodb aggregation online, json to mongodb aggregation tool, json mongodb aggregation online, json mongodb aggregation tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-mongodb-aggregation/' },
  openGraph: {
    title: 'JSON to MongoDB Aggregation - Free Online Converter ',
    description: 'Generate MongoDB aggregation pipeline stages from JSON data queries for database operations. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-mongodb-aggregation/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to MongoDB Aggregation - Free Online Converter ',
    description: 'Generate MongoDB aggregation pipeline stages from JSON data queries for database operations. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
