import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Sort Arrays - Free Online Formatter ',
  description: 'Sort array elements (strings and numbers) within JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json sort arrays, json sort arrays online, json sort arrays tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-sort-arrays/' },
  openGraph: {
    title: 'JSON Sort Arrays - Free Online Formatter ',
    description: 'Sort array elements (strings and numbers) within JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-sort-arrays/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Sort Arrays - Free Online Formatter ',
    description: 'Sort array elements (strings and numbers) within JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
