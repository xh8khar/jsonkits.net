import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Denormalize Online — Free JSON Tool | JSONKits',
  description: 'Randomize key order in JSON objects to denormalize the structure. 100% client-side and free to use.',
  keywords: ['json formatter, json beautifier, pretty print json, format json online, json prettier, json indentation, json formatting tool, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
