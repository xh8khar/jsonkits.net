import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Fixer Online — Free JSON Tool | JSONKits',
  description: 'Fix common JSON errors like trailing commas, missing quotes, and single quotes. 100% client-side and free to use.',
  keywords: ['json validator, validate json, json syntax checker, json linter, check json online, json error checker, json schema validation, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
