import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PostgreSQL Converter - Free Online Converter',
  description: 'Generate PostgreSQL CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to postgresql, json to postgresql online, json to postgresql tool, convert json to postgresql, json postgresql converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-postgresql/' },
  openGraph: {
    title: 'JSON to PostgreSQL Converter - Free Online Converter',
    description: 'Generate PostgreSQL CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-postgresql/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PostgreSQL Converter - Free Online Converter',
    description: 'Generate PostgreSQL CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
