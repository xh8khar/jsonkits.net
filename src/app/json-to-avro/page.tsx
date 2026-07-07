import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Apache Avro Converter - Free Online Converter',
  description: 'Encode JSON data into Apache Avro binary format using an Avro schema definition with hex output.',
  keywords: ['json to apache avro, json to apache avro online, json to apache avro tool, json to avro, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-avro/' },
  openGraph: {
    title: 'JSON to Apache Avro Converter - Free Online Converter',
    description: 'Encode JSON data into Apache Avro binary format using an Avro schema definition with hex output.',
    url: 'https://www.jsonkits.net/json-to-avro/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Apache Avro Converter - Free Online Converter',
    description: 'Encode JSON data into Apache Avro binary format using an Avro schema definition with hex output.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
