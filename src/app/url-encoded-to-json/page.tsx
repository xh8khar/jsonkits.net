import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'URL Encoded to JSON - Free Online Converter ',
  description: 'Convert URL-encoded strings to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['url encoded to json, url encoded to json online, url encoded to json tool, convert url encoded to json, url encoded json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
