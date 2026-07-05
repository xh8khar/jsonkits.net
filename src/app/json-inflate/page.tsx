import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Inflate - Free Online Formatter ',
  description: 'Decompress previously Deflate-compressed JSON from Base64. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json inflate, json inflate online, json inflate tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
