import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Extract - Free Online Formatter ',
  description: 'Extract values from JSON using dot-notation path expressions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json extract, json extract online, json extract tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-extract/' },
  openGraph: {
    title: 'JSON Extract - Free Online Formatter ',
    description: 'Extract values from JSON using dot-notation path expressions. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-extract/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Extract - Free Online Formatter ',
    description: 'Extract values from JSON using dot-notation path expressions. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
