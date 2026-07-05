import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Rename Keys - Free Online Formatter | JSONKits',
  description: 'Rename JSON object keys using a key mapping definition. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json rename keys, json rename keys online, json rename keys tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
