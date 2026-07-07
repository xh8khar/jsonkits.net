import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Beautifier - Free Online Formatter ',
  description: 'Beautify and format JSON with proper indentation for readability. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json beautifier, json beautifier online, json beautifier tool, json formatter, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-beautifier/' },
  openGraph: {
    title: 'JSON Beautifier - Free Online Formatter ',
    description: 'Beautify and format JSON with proper indentation for readability. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-beautifier/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Beautifier - Free Online Formatter ',
    description: 'Beautify and format JSON with proper indentation for readability. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
