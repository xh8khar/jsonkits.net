import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PySpark Schema - Generate PySpark StructType',
  description: 'Generate PySpark StructType schema definitions from JSON data samples for Spark data processing.',
  keywords: ['json to pyspark', 'pyspark schema', 'spark structtype', 'json to spark'],
}

export default function Page() {
  return <ToolPageClient />
}
