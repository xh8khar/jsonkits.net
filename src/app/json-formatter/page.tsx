import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Formatter - Free Online Formatter ',
  description: 'Beautify and pretty-print your JSON with customizable indentation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json formatter, json formatter online, json formatter tool, formatter online, formatter tool, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
