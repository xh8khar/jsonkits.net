import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PHP Class Online — Free JSON Tool | JSONKits',
  description: 'Generate PHP classes with getters/setters from JSON. 100% client-side and free to use.',
  keywords: ['json to php class, convert json to php class, json php class converter, php class format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
