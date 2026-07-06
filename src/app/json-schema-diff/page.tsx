import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema Diff - Free Online Tool ',
  description: 'Compare two JSON Schemas and see structural differences. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema diff, json schema compare, schema comparison, json schema validator, schema diff tool, json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
