import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Download - Free Online Formatter ',
  description: 'Format and download JSON data as a .json file. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json download, json download online, json download tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-download/' },
  openGraph: {
    title: 'JSON Download - Free Online Formatter ',
    description: 'Format and download JSON data as a .json file. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-download/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Download - Free Online Formatter ',
    description: 'Format and download JSON data as a .json file. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
