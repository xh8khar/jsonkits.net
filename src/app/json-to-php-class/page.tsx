import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PHP Class - Free Online Converter | JSONKits',
  description: 'Generate PHP classes with getters/setters from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to php class, json to php class online, json to php class tool, convert json to php class, json php class converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
