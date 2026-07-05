import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Minifier - Free Online Formatter | JSONKits',
  description: 'Compress JSON by removing whitespace to reduce file size. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json minifier, json minifier online, json minifier tool, minifier online, minifier tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
