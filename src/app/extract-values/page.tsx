import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Extract Values - Free Online Formatter ',
  description: 'Extract all values from JSON data with unique count. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['extract values, extract values online, extract values tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
