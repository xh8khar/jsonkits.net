import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Extract Arrays - Free Online Formatter | JSONKits',
  description: 'Extract all array nodes from JSON data into a flat list. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json extract arrays, json extract arrays online, json extract arrays tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
