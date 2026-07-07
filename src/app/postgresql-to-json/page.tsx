import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PostgreSQL to JSON Converter - Free Online Converter',
  description: 'Parse PostgreSQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['postgresql to json, postgresql to json online, postgresql to json tool, convert postgresql to json, postgresql json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/postgresql-to-json/' },
  openGraph: {
    title: 'PostgreSQL to JSON Converter - Free Online Converter',
    description: 'Parse PostgreSQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/postgresql-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PostgreSQL to JSON Converter - Free Online Converter',
    description: 'Parse PostgreSQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
