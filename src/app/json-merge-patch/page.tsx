import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Merge Patch - Free Online Converter | JSONKits',
  description: 'Apply RFC 7396 JSON Merge Patch to a target JSON object. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json merge patch, json merge patch online, json merge patch tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
