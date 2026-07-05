import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Repair - Free Online Formatter | JSONKits',
  description: 'Attempt to repair invalid JSON by fixing quotes, trailing commas, and comments. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json repair, json repair online, json repair tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
