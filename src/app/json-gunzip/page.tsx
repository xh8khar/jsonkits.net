import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Gunzip - Free Online Formatter ',
  description: 'Decompress Gzip-compressed JSON from Base64 back to readable text. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json gunzip, json gunzip online, json gunzip tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-gunzip/' },
  openGraph: {
    title: 'JSON Gunzip - Free Online Formatter ',
    description: 'Decompress Gzip-compressed JSON from Base64 back to readable text. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-gunzip/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Gunzip - Free Online Formatter ',
    description: 'Decompress Gzip-compressed JSON from Base64 back to readable text. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
