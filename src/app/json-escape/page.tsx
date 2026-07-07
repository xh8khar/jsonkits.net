import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Escape - Free Online Converter ',
  description: 'Escape a JSON string for use in source code or queries. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json escape, json escape online, json escape tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-escape/' },
  openGraph: {
    title: 'JSON Escape - Free Online Converter ',
    description: 'Escape a JSON string for use in source code or queries. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-escape/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Escape - Free Online Converter ',
    description: 'Escape a JSON string for use in source code or queries. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
