import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PySpark Schema - Generate PySpark StructType',
  description: 'Generate PySpark StructType schema definitions from JSON data samples for Spark data processing.',
  keywords: ['json to pyspark', 'pyspark schema', 'spark structtype', 'json to spark'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-pyspark-schema/' },
  openGraph: {
    title: 'JSON to PySpark Schema - Generate PySpark StructType',
    description: 'Generate PySpark StructType schema definitions from JSON data samples for Spark data processing.',
    url: 'https://www.jsonkits.net/json-to-pyspark-schema/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PySpark Schema - Generate PySpark StructType',
    description: 'Generate PySpark StructType schema definitions from JSON data samples for Spark data processing.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
