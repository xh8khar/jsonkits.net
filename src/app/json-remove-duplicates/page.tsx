import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Remove Duplicates - Free Online Formatter ',
  description: 'Remove duplicate objects from JSON arrays. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json remove duplicates, json remove duplicates online, json remove duplicates tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-remove-duplicates/' },
  openGraph: {
    title: 'JSON Remove Duplicates - Free Online Formatter ',
    description: 'Remove duplicate objects from JSON arrays. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-remove-duplicates/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Remove Duplicates - Free Online Formatter ',
    description: 'Remove duplicate objects from JSON arrays. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
