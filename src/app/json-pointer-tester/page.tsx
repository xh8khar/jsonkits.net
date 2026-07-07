import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Pointer Tester - Free Online Formatter ',
  description: 'Test RFC 6901 JSON Pointer expressions against JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json pointer tester, json pointer tester online, json pointer tester tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-pointer-tester/' },
  openGraph: {
    title: 'JSON Pointer Tester - Free Online Formatter ',
    description: 'Test RFC 6901 JSON Pointer expressions against JSON data. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-pointer-tester/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Pointer Tester - Free Online Formatter ',
    description: 'Test RFC 6901 JSON Pointer expressions against JSON data. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
