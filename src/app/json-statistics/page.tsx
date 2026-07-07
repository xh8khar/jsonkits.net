import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Statistics - Free Online Formatter ',
  description: 'Get detailed statistics about your JSON data structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json statistics, json statistics online, json statistics tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-statistics/' },
  openGraph: {
    title: 'JSON Statistics - Free Online Formatter ',
    description: 'Get detailed statistics about your JSON data structure. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-statistics/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Statistics - Free Online Formatter ',
    description: 'Get detailed statistics about your JSON data structure. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
