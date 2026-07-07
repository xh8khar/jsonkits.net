import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Parquet to JSON Converter',
  description: 'Convert Apache Parquet schema representation back to sample JSON data. 100% free, client-side Parquet to JSON converter.',
  keywords: ['parquet to json', 'parquet schema to json', 'convert parquet to json', 'apache parquet to json', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
