import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Parquet Converter',
  description: 'Convert JSON data to Apache Parquet schema and structure representation. 100% free, client-side JSON to Parquet converter.',
  keywords: ['json to parquet', 'json to parquet schema', 'parquet schema generator', 'convert json to parquet', 'apache parquet', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
