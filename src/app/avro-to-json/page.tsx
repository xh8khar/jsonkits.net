import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Apache Avro to JSON Converter - Free Online Converter',
  description: 'Decode Apache Avro binary data back into readable JSON using an Avro schema definition.',
  keywords: ['apache avro to json, apache avro to json online, apache avro to json tool, avro to json, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
