import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Extract Objects - Free Online Formatter ',
  description: 'Extract all object nodes from JSON data into a flat list. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json extract objects, json extract objects online, json extract objects tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-extract-objects/' },
  openGraph: {
    title: 'JSON Extract Objects - Free Online Formatter ',
    description: 'Extract all object nodes from JSON data into a flat list. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-extract-objects/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Extract Objects - Free Online Formatter ',
    description: 'Extract all object nodes from JSON data into a flat list. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
