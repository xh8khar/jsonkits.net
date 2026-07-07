import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TSV Converter - Free Online Converter',
  description: 'Transform JSON arrays into tab-separated values. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to tsv, json to tsv online, json to tsv tool, convert json to tsv, json tsv converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-tsv/' },
  openGraph: {
    title: 'JSON to TSV Converter - Free Online Converter',
    description: 'Transform JSON arrays into tab-separated values. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-tsv/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to TSV Converter - Free Online Converter',
    description: 'Transform JSON arrays into tab-separated values. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
