import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Detect Duplicate Keys Online — Free JSON Tool | JSONKits',
  description: 'Detect duplicate keys within the same object level. 100% client-side and free to use.',
  keywords: ['json formatter, json beautifier, pretty print json, format json online, json prettier, json indentation, json formatting tool, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
