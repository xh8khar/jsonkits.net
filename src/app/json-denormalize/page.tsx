import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Denormalize - Free Online Formatter | JSONKits',
  description: 'Randomize key order in JSON objects to denormalize the structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json denormalize, json denormalize online, json denormalize tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
