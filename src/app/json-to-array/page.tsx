import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Object to Array - Free Online Converter | JSONKits',
  description: 'Convert JSON objects to arrays of key-value pair objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json object to array, json object to array online, json object to array tool, json to array online, json to array tool, json to array, convert json to array, json array converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
