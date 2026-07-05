import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Decompress (Inflate) - Free Online Formatter ',
  description: 'Decompress previously Deflate-compressed JSON from Base64. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json decompress (inflate), json decompress (inflate) online, json decompress (inflate) tool, json decompress online, json decompress tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
