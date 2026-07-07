import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Custom Stringify - Free Online Formatter ',
  description: 'Stringify JSON with configurable indentation and sorting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json custom stringify, json custom stringify online, json custom stringify tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-custom-stringify/' },
  openGraph: {
    title: 'JSON Custom Stringify - Free Online Formatter ',
    description: 'Stringify JSON with configurable indentation and sorting. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-custom-stringify/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Custom Stringify - Free Online Formatter ',
    description: 'Stringify JSON with configurable indentation and sorting. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
