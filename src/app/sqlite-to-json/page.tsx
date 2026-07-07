import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQLite to JSON Converter - Free Online Converter',
  description: 'Parse SQLite INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['sqlite to json, sqlite to json online, sqlite to json tool, convert sqlite to json, sqlite json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/sqlite-to-json/' },
  openGraph: {
    title: 'SQLite to JSON Converter - Free Online Converter',
    description: 'Parse SQLite INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/sqlite-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SQLite to JSON Converter - Free Online Converter',
    description: 'Parse SQLite INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
