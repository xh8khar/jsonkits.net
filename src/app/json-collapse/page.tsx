import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Collapse - Free Online Formatter | JSONKits',
  description: 'Collapse formatted JSON to a compact single-line format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json collapse, json collapse online, json collapse tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
