import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema Generator - Free Online Generator | JSONKits',
  description: 'Generate a JSON Schema (draft-07) from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema generator, json schema generator online, json schema generator tool, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
