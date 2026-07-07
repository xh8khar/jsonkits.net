import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SAS Converter - Free Online Converter',
  description: 'Generate SAS data step code and variable definitions from JSON data samples for statistical analysis.',
  keywords: ['json to sas, json to sas online, json to sas tool, json to sas, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-sas/' },
  openGraph: {
    title: 'JSON to SAS Converter - Free Online Converter',
    description: 'Generate SAS data step code and variable definitions from JSON data samples for statistical analysis.',
    url: 'https://www.jsonkits.net/json-to-sas/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SAS Converter - Free Online Converter',
    description: 'Generate SAS data step code and variable definitions from JSON data samples for statistical analysis.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
