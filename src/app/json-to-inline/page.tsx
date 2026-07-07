import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Inline - Free Online Formatter ',
  description: 'Convert JSON to a single-line or custom-indented inline format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to inline, json to inline online, json to inline tool, convert json to inline, json inline converter, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-inline/' },
  openGraph: {
    title: 'JSON to Inline - Free Online Formatter ',
    description: 'Convert JSON to a single-line or custom-indented inline format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-inline/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Inline - Free Online Formatter ',
    description: 'Convert JSON to a single-line or custom-indented inline format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
