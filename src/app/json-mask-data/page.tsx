import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Mask Data - Free Online Formatter ',
  description: 'Mask sensitive fields in JSON (passwords, tokens, emails, SSN). 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json mask data, json mask data online, json mask data tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
