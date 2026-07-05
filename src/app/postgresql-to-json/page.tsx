import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PostgreSQL to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse PostgreSQL INSERT statements back into JSON format. 100% client-side and free to use.',
  keywords: ['postgresql to json, convert postgresql to json, postgresql json converter, json converter, postgresql format, postgresql parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
