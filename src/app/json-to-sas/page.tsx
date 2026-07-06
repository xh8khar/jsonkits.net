import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SAS Converter - Free Online Converter',
  description: 'Generate SAS data step code and variable definitions from JSON data samples for statistical analysis.',
  keywords: ['json to sas, json to sas online, json to sas tool, json to sas, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
