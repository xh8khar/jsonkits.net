import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'BSON to JSON - Free Online Converter | JSONKits',
  description: 'Convert MongoDB extended JSON (BSON) back to standard JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['bson to json, bson to json online, bson to json tool, convert bson to json, bson json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
