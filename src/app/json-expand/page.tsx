import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Expand - Free Online Formatter ',
  description: 'Expand minified JSON to a beautifully formatted tree view. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json expand, json expand online, json expand tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-expand/' },
  openGraph: {
    title: 'JSON Expand - Free Online Formatter ',
    description: 'Expand minified JSON to a beautifully formatted tree view. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-expand/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Expand - Free Online Formatter ',
    description: 'Expand minified JSON to a beautifully formatted tree view. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
