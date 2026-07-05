import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Kotlin Online — Free JSON Tool | JSONKits',
  description: 'Generate Kotlin data classes from JSON samples. 100% client-side and free to use.',
  keywords: ['json to kotlin, convert json to kotlin, json kotlin converter, kotlin format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
