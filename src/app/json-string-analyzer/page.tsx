import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON String Analyzer - Free Online Formatter ',
  description: 'Analyze all string values in JSON for length statistics. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json string analyzer, json string analyzer online, json string analyzer tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-string-analyzer/' },
  openGraph: {
    title: 'JSON String Analyzer - Free Online Formatter ',
    description: 'Analyze all string values in JSON for length statistics. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-string-analyzer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON String Analyzer - Free Online Formatter ',
    description: 'Analyze all string values in JSON for length statistics. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
