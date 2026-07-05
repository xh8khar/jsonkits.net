import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema to Java - Free Online Converter | JSONKits',
  description: 'Generate Java POJO classes with validation annotations from JSON Schema (draft-07) definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema to java, json schema to java online, json schema to java tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
