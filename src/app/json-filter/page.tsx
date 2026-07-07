import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Filter - Free Online Formatter ',
  description: 'Filter JSON to only include specified dot-notation paths. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json filter, json filter online, json filter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-filter/' },
  openGraph: {
    title: 'JSON Filter - Free Online Formatter ',
    description: 'Filter JSON to only include specified dot-notation paths. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-filter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Filter - Free Online Formatter ',
    description: 'Filter JSON to only include specified dot-notation paths. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
