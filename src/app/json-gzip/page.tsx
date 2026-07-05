import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Gzip - Free Online Formatter ',
  description: 'Gzip-compress JSON data and output Base64-encoded result. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json gzip, json gzip online, json gzip tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
