import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Sort Keys - Free Online Formatter | JSONKits',
  description: 'Sort all JSON object keys alphabetically for consistent output. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json sort keys, json sort keys online, json sort keys tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
