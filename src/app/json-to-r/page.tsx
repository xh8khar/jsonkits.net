import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to R - Free Online Converter | JSONKits',
  description: 'Convert JSON to R list syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to r, json to r online, json to r tool, convert json to r, json r converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
