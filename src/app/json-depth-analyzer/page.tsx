import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Depth Analyzer - Free Online Formatter ',
  description: 'Analyze nesting depth, node count, and branching of JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json depth analyzer, json depth analyzer online, json depth analyzer tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-depth-analyzer/' },
  openGraph: {
    title: 'JSON Depth Analyzer - Free Online Formatter ',
    description: 'Analyze nesting depth, node count, and branching of JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-depth-analyzer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Depth Analyzer - Free Online Formatter ',
    description: 'Analyze nesting depth, node count, and branching of JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
