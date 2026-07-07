import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Merge Files - Free Online Converter ',
  description: 'Merge multiple JSON objects pasted as separate blocks into one. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json merge files, json merge files online, json merge files tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-merge-files/' },
  openGraph: {
    title: 'JSON Merge Files - Free Online Converter ',
    description: 'Merge multiple JSON objects pasted as separate blocks into one. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-merge-files/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Merge Files - Free Online Converter ',
    description: 'Merge multiple JSON objects pasted as separate blocks into one. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
