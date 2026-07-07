import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to CSV Converter - Free Online Converter',
  description: 'Transform JSON arrays into CSV spreadsheets. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to csv, json to csv online, json to csv tool, convert json to csv, json csv converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-csv/' },
  openGraph: {
    title: 'JSON to CSV Converter - Free Online Converter',
    description: 'Transform JSON arrays into CSV spreadsheets. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-csv/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to CSV Converter - Free Online Converter',
    description: 'Transform JSON arrays into CSV spreadsheets. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
