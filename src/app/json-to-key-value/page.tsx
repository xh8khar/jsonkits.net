import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Key-Value - Free Online Converter ',
  description: 'Convert JSON objects to simple key:value pair lines. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to key-value, json to key-value online, json to key-value tool, json to key value online, json to key value tool, json to key value, convert json to key value, json key value converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
