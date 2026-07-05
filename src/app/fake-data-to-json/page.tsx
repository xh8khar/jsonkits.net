import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Fake Data to JSON Online — Free JSON Tool | JSONKits',
  description: 'Infer a template schema from JSON data for regeneration. 100% client-side and free to use.',
  keywords: ['json generator, generate json, fake json data, mock json, random json, json creator, json maker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
