import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to BigQuery Schema - Free Online Converter ',
  description: 'Generate Google BigQuery schema definitions from JSON data samples for data warehouse table design. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to bigquery schema, json to bigquery schema online, json to bigquery schema tool, json to bigquery online, json to bigquery tool, json to bigquery, convert json to bigquery, json bigquery converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
