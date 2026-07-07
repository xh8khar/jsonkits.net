import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Hive DDL - Generate Hive Table Schemas',
  description: 'Generate Apache Hive DDL CREATE TABLE statements with JSON SerDe from JSON data samples.',
  keywords: ['json to hive', 'hive ddl', 'hive table', 'json serde', 'hive schema'],
}

export default function Page() {
  return <ToolPageClient />
}
