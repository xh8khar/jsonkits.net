import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Copy - Free Online Formatter | JSONKits',
  description: 'Format and copy JSON data to your clipboard with one click. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json copy, json copy online, json copy tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
