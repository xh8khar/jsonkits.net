import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Haskell Converter - Free Online Converter',
  description: 'Generate Haskell data type definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to haskell, json to haskell online, json to haskell tool, convert json to haskell, json haskell converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-haskell/' },
  openGraph: {
    title: 'JSON to Haskell Converter - Free Online Converter',
    description: 'Generate Haskell data type definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-haskell/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Haskell Converter - Free Online Converter',
    description: 'Generate Haskell data type definitions from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
