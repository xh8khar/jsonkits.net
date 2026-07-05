import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Pretty Print - Free Online Formatter | JSONKits',
  description: 'Pretty-print JSON data with customizable indentation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json pretty print, json pretty print online, json pretty print tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
