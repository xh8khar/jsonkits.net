import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to .env Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON objects to .env file format. 100% client-side and free to use.',
  keywords: ['json to .env, convert json to .env, json .env converter, .env format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
