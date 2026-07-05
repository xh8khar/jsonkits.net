import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Size Calculator - Free Online Formatter | JSONKits',
  description: 'Calculate the byte size, element count, and depth of JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json size calculator, json size calculator online, json size calculator tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
