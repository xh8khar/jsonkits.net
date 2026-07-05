import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Property Path Finder - Free Online Formatter | JSONKits',
  description: 'Find all property paths in JSON data with their types and example values for data structure exploration. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json property path finder, json property path finder online, json property path finder tool, json property path online, json property path tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
