import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Collection Counter - Free Online Formatter ',
  description: 'Count field presence, types, and nulls across array items. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json collection counter, json collection counter online, json collection counter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-collection-counter/' },
  openGraph: {
    title: 'JSON Collection Counter - Free Online Formatter ',
    description: 'Count field presence, types, and nulls across array items. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-collection-counter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Collection Counter - Free Online Formatter ',
    description: 'Count field presence, types, and nulls across array items. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
