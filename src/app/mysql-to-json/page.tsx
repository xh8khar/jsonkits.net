import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'MySQL to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse MySQL INSERT statements back into JSON format. 100% client-side and free to use.',
  keywords: ['mysql to json, convert mysql to json, mysql json converter, json converter, mysql format, mysql parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
