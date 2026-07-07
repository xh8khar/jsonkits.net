import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Remove Empty - Free Online Formatter ',
  description: 'Remove all empty objects and arrays from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json remove empty, json remove empty online, json remove empty tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-remove-empty/' },
  openGraph: {
    title: 'JSON Remove Empty - Free Online Formatter ',
    description: 'Remove all empty objects and arrays from JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-remove-empty/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Remove Empty - Free Online Formatter ',
    description: 'Remove all empty objects and arrays from JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
