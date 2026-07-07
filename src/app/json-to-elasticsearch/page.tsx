import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Elasticsearch Bulk - Free Online Converter ',
  description: 'Convert JSON data to Elasticsearch bulk indexing format for efficient data ingestion. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to elasticsearch bulk, json to elasticsearch bulk online, json to elasticsearch bulk tool, json to elasticsearch online, json to elasticsearch tool, json to elasticsearch, convert json to elasticsearch, json elasticsearch converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-elasticsearch/' },
  openGraph: {
    title: 'JSON to Elasticsearch Bulk - Free Online Converter ',
    description: 'Convert JSON data to Elasticsearch bulk indexing format for efficient data ingestion. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-elasticsearch/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Elasticsearch Bulk - Free Online Converter ',
    description: 'Convert JSON data to Elasticsearch bulk indexing format for efficient data ingestion. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
