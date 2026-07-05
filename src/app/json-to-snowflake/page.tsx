import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Snowflake - Free Online Converter ',
  description: 'Generate Snowflake INSERT statements from JSON data for cloud data warehouse ingestion.',
  keywords: ['json to snowflake, json to snowflake online, json to snowflake tool, json to snowflake, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
