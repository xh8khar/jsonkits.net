import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQL INSERT to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse SQL INSERT statements into JSON format. 100% client-side and free to use.',
  keywords: ['sql insert to json, convert sql insert to json, sql insert json converter, json converter, sql insert format, sql insert parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
