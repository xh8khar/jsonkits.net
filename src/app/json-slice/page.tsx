import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Slice - Free Online Formatter ',
  description: 'Extract a sub-array slice from JSON arrays by start and end indices. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json slice, json slice online, json slice tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
