import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Search - Free Online Formatter ',
  description: 'Search within JSON data for matching values and keys. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json search, json search online, json search tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-search/' },
  openGraph: {
    title: 'JSON Search - Free Online Formatter ',
    description: 'Search within JSON data for matching values and keys. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-search/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Search - Free Online Formatter ',
    description: 'Search within JSON data for matching values and keys. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
