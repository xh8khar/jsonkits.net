import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Detect Duplicate Keys - Free Online Formatter | JSONKits',
  description: 'Detect duplicate keys within the same object level. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json detect duplicate keys, json detect duplicate keys online, json detect duplicate keys tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
