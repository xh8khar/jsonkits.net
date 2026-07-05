import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Ruby Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to Ruby hash syntax. 100% client-side and free to use.',
  keywords: ['json to ruby, convert json to ruby, json ruby converter, ruby format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
