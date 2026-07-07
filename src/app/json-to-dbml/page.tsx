import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to DBML - Generate Database Markup Language',
  description: 'Generate DBML (Database Markup Language) schema definitions from JSON data samples.',
  keywords: ['json to dbml', 'dbml generator', 'database markup', 'dbml schema'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-dbml/' },
  openGraph: {
    title: 'JSON to DBML - Generate Database Markup Language',
    description: 'Generate DBML (Database Markup Language) schema definitions from JSON data samples.',
    url: 'https://www.jsonkits.net/json-to-dbml/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to DBML - Generate Database Markup Language',
    description: 'Generate DBML (Database Markup Language) schema definitions from JSON data samples.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
