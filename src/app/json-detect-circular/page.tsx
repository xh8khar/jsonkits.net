import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Detect Circular - Free Online Formatter ',
  description: 'Detect circular references in JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json detect circular, json detect circular online, json detect circular tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-detect-circular/' },
  openGraph: {
    title: 'JSON Detect Circular - Free Online Formatter ',
    description: 'Detect circular references in JSON data structures. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-detect-circular/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Detect Circular - Free Online Formatter ',
    description: 'Detect circular references in JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
