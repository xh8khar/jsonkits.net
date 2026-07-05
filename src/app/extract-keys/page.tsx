import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Extract Keys - Free Online Formatter | JSONKits',
  description: 'Extract all unique object keys from JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['extract keys, extract keys online, extract keys tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
