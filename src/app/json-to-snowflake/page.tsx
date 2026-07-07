import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Snowflake Converter - Free Online Converter',
  description: 'Generate Snowflake INSERT statements from JSON data for cloud data warehouse ingestion.',
  keywords: ['json to snowflake, json to snowflake online, json to snowflake tool, json to snowflake, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-snowflake/' },
  openGraph: {
    title: 'JSON to Snowflake Converter - Free Online Converter',
    description: 'Generate Snowflake INSERT statements from JSON data for cloud data warehouse ingestion.',
    url: 'https://www.jsonkits.net/json-to-snowflake/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Snowflake Converter - Free Online Converter',
    description: 'Generate Snowflake INSERT statements from JSON data for cloud data warehouse ingestion.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
