import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Expand - Free Online Formatter ',
  description: 'Expand minified JSON to a beautifully formatted tree view. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json expand, json expand online, json expand tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
