import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Hive DDL - Generate Hive Table Schemas',
  description: 'Generate Apache Hive DDL CREATE TABLE statements with JSON SerDe from JSON data samples.',
  keywords: ['json to hive', 'hive ddl', 'hive table', 'json serde', 'hive schema'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-hive-ddl/' },
  openGraph: {
    title: 'JSON to Hive DDL - Generate Hive Table Schemas',
    description: 'Generate Apache Hive DDL CREATE TABLE statements with JSON SerDe from JSON data samples.',
    url: 'https://www.jsonkits.net/json-to-hive-ddl/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Hive DDL - Generate Hive Table Schemas',
    description: 'Generate Apache Hive DDL CREATE TABLE statements with JSON SerDe from JSON data samples.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
