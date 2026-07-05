import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Key Counter - Free Online Formatter | JSONKits',
  description: 'Count key frequency and type breakdown across all objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json key counter, json key counter online, json key counter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
