import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'BSON to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert MongoDB extended JSON (BSON) back to standard JSON. 100% client-side and free to use.',
  keywords: ['bson to json, convert bson to json, bson json converter, json converter, bson format, bson parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
