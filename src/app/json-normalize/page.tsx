import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Normalize - Free Online Formatter ',
  description: 'Normalize JSON by sorting keys consistently at all levels. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json normalize, json normalize online, json normalize tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-normalize/' },
  openGraph: {
    title: 'JSON Normalize - Free Online Formatter ',
    description: 'Normalize JSON by sorting keys consistently at all levels. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-normalize/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Normalize - Free Online Formatter ',
    description: 'Normalize JSON by sorting keys consistently at all levels. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
