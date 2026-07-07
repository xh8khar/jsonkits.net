import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Pointer Generator - Free Online Formatter ',
  description: 'Generate RFC 6901 JSON Pointers for every node in your JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json pointer generator, json pointer generator online, json pointer generator tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-pointer-generator/' },
  openGraph: {
    title: 'JSON Pointer Generator - Free Online Formatter ',
    description: 'Generate RFC 6901 JSON Pointers for every node in your JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-pointer-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Pointer Generator - Free Online Formatter ',
    description: 'Generate RFC 6901 JSON Pointers for every node in your JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
