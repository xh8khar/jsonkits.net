import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema to Pydantic - Free Online Converter ',
  description: 'Generate Python Pydantic model classes with validation rules from JSON Schema (draft-07) definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema to pydantic, json schema to pydantic online, json schema to pydantic tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
