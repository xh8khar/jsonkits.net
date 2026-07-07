import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Linter - Free Online Formatter ',
  description: 'Lint JSON for style issues, duplicate keys, and naming conventions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json linter, json linter online, json linter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-linter/' },
  openGraph: {
    title: 'JSON Linter - Free Online Formatter ',
    description: 'Lint JSON for style issues, duplicate keys, and naming conventions. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-linter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Linter - Free Online Formatter ',
    description: 'Lint JSON for style issues, duplicate keys, and naming conventions. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
