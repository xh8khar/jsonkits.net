import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Value Analyzer - Free Online Formatter ',
  description: 'Analyze value frequency and distribution across JSON fields. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json value analyzer, json value analyzer online, json value analyzer tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
