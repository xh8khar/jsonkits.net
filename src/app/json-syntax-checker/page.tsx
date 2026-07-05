import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Syntax Checker Online — Free JSON Tool | JSONKits',
  description: 'Check JSON syntax and get detailed error messages for invalid input. 100% client-side and free to use.',
  keywords: ['json validator, validate json, json syntax checker, json linter, check json online, json error checker, json schema validation, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
