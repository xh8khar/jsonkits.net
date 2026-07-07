import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Split - Free Online Formatter ',
  description: 'Split a JSON array into smaller chunks of configurable size. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json split, json split online, json split tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-split/' },
  openGraph: {
    title: 'JSON Split - Free Online Formatter ',
    description: 'Split a JSON array into smaller chunks of configurable size. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-split/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Split - Free Online Formatter ',
    description: 'Split a JSON array into smaller chunks of configurable size. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
