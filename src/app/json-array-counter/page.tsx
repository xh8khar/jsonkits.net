import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Array Counter - Free Online Formatter | JSONKits',
  description: 'Count all arrays in JSON and report their sizes and nesting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json array counter, json array counter online, json array counter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
