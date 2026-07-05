import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Remove Nulls - Free Online Formatter | JSONKits',
  description: 'Remove all null values from JSON objects and arrays. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json remove nulls, json remove nulls online, json remove nulls tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
