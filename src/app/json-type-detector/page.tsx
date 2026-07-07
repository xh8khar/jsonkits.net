import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Type Detector - Free Online Formatter ',
  description: 'Detect and report field types across all objects in JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json type detector, json type detector online, json type detector tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-type-detector/' },
  openGraph: {
    title: 'JSON Type Detector - Free Online Formatter ',
    description: 'Detect and report field types across all objects in JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-type-detector/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Type Detector - Free Online Formatter ',
    description: 'Detect and report field types across all objects in JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
