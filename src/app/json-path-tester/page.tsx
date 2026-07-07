import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSONPath Tester - Free Online Formatter ',
  description: 'Test JSONPath expressions against JSON data and see results. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jsonpath tester, jsonpath tester online, jsonpath tester tool, json path tester online, json path tester tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-path-tester/' },
  openGraph: {
    title: 'JSONPath Tester - Free Online Formatter ',
    description: 'Test JSONPath expressions against JSON data and see results. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-path-tester/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSONPath Tester - Free Online Formatter ',
    description: 'Test JSONPath expressions against JSON data and see results. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
