import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Apache Avro Converter - Free Online Converter',
  description: 'Encode JSON data into Apache Avro binary format using an Avro schema definition with hex output.',
  keywords: ['json to apache avro, json to apache avro online, json to apache avro tool, json to avro, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
