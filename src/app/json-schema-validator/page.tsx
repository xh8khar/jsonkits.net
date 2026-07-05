import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema Validator - Free Online Validator | JSONKits',
  description: 'Validate JSON data against a JSON Schema (draft-07). 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema validator, json schema validator online, json schema validator tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
