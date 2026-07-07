import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL INSERT - Free Online Converter ',
  description: 'Generate SQL INSERT statements from JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to sql insert, json to sql insert online, json to sql insert tool, convert json to sql insert, json sql insert converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-sql-insert/' },
  openGraph: {
    title: 'JSON to SQL INSERT - Free Online Converter ',
    description: 'Generate SQL INSERT statements from JSON data. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-sql-insert/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SQL INSERT - Free Online Converter ',
    description: 'Generate SQL INSERT statements from JSON data. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
