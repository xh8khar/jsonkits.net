import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Invalid JSON Repair Online — Free JSON Tool | JSONKits',
  description: 'Repair malformed JSON by detecting and fixing common syntax issues. 100% client-side and free to use.',
  keywords: ['json validator, validate json, json syntax checker, json linter, check json online, json error checker, json schema validation, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
