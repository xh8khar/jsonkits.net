import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Flat JSON to Nested - Free Online Converter ',
  description: 'Convert dot-notation flat JSON back to nested structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['flat json to nested, flat json to nested online, flat json to nested tool, flat to nested json online, flat to nested json tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
