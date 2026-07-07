import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Denormalize - Free Online Formatter ',
  description: 'Randomize key order in JSON objects to denormalize the structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json denormalize, json denormalize online, json denormalize tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-denormalize/' },
  openGraph: {
    title: 'JSON Denormalize - Free Online Formatter ',
    description: 'Randomize key order in JSON objects to denormalize the structure. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-denormalize/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Denormalize - Free Online Formatter ',
    description: 'Randomize key order in JSON objects to denormalize the structure. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
