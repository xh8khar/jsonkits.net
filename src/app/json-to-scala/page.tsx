import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Scala Online — Free JSON Tool | JSONKits',
  description: 'Generate Scala case classes with Play JSON from JSON. 100% client-side and free to use.',
  keywords: ['json to scala, convert json to scala, json scala converter, scala format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
