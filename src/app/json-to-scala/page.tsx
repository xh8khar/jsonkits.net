import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Scala Converter - Free Online Converter',
  description: 'Generate Scala case classes with Play JSON from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to scala, json to scala online, json to scala tool, convert json to scala, json scala converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
