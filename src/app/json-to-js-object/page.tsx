import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JS Object Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to JavaScript object literal syntax. 100% client-side and free to use.',
  keywords: ['json to js object, convert json to js object, json js object converter, js object format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
