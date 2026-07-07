import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Deflate - Free Online Formatter ',
  description: 'Compress JSON using the Deflate algorithm to Base64. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json deflate, json deflate online, json deflate tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-deflate/' },
  openGraph: {
    title: 'JSON Deflate - Free Online Formatter ',
    description: 'Compress JSON using the Deflate algorithm to Base64. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-deflate/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Deflate - Free Online Formatter ',
    description: 'Compress JSON using the Deflate algorithm to Base64. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
