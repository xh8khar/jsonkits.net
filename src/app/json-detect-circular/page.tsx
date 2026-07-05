import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Detect Circular - Free Online Formatter | JSONKits',
  description: 'Detect circular references in JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json detect circular, json detect circular online, json detect circular tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
