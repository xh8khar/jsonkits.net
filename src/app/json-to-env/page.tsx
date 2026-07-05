import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to .env - Free Online Converter | JSONKits',
  description: 'Convert JSON objects to .env file format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to .env, json to .env online, json to .env tool, json to env online, json to env tool, json to env, convert json to env, json env converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
