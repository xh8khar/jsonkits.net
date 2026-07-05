import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compact - Free Online Formatter ',
  description: 'Compact JSON by removing all whitespace for minimal file size. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json compact, json compact online, json compact tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
