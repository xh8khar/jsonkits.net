import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Julia Converter - Free Online Converter',
  description: 'Generate Julia struct definitions with JSON parsing support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to julia, json to julia online, json to julia tool, convert json to julia, json julia converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-julia/' },
  openGraph: {
    title: 'JSON to Julia Converter - Free Online Converter',
    description: 'Generate Julia struct definitions with JSON parsing support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-julia/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Julia Converter - Free Online Converter',
    description: 'Generate Julia struct definitions with JSON parsing support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
