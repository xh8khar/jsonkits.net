import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL UPDATE - Free Online Converter ',
  description: 'Generate SQL UPDATE statements from JSON data for database record modifications.',
  keywords: ['json to sql update, json to sql update online, json to sql update tool, json to sql update, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-sql-update/' },
  openGraph: {
    title: 'JSON to SQL UPDATE - Free Online Converter ',
    description: 'Generate SQL UPDATE statements from JSON data for database record modifications.',
    url: 'https://www.jsonkits.net/json-to-sql-update/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SQL UPDATE - Free Online Converter ',
    description: 'Generate SQL UPDATE statements from JSON data for database record modifications.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
