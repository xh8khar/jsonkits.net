import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TSV to JSON Converter - Free Online Converter',
  description: 'Convert tab-separated values to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['tsv to json, tsv to json online, tsv to json tool, convert tsv to json, tsv json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/tsv-to-json/' },
  openGraph: {
    title: 'TSV to JSON Converter - Free Online Converter',
    description: 'Convert tab-separated values to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/tsv-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TSV to JSON Converter - Free Online Converter',
    description: 'Convert tab-separated values to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
