import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Oracle to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse Oracle SQL INSERT statements back into JSON format. 100% client-side and free to use.',
  keywords: ['oracle to json, convert oracle to json, oracle json converter, json converter, oracle format, oracle parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
