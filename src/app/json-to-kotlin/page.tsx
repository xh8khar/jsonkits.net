import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Kotlin - Free Online Converter ',
  description: 'Generate Kotlin data classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to kotlin, json to kotlin online, json to kotlin tool, convert json to kotlin, json kotlin converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
