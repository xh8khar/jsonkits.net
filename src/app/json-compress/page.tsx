import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compress (Deflate) - Free Online Formatter | JSONKits',
  description: 'Compress JSON data using Deflate algorithm and output Base64. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json compress (deflate), json compress (deflate) online, json compress (deflate) tool, json compress online, json compress tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
