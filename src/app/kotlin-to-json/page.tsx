import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Kotlin to JSON Online — Free JSON Tool | JSONKits',
  description: 'Generate sample JSON data from Kotlin data class definitions. 100% client-side and free to use.',
  keywords: ['json generator, generate json, fake json data, mock json, random json, json creator, json maker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
