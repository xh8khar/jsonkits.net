import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Extract Nested Objects - Free Online Formatter ',
  description: 'Extract all nested objects from JSON into a flat list. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['extract nested objects, extract nested objects online, extract nested objects tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
