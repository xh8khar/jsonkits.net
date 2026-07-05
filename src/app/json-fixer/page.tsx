import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Fixer - Free Online Validator | JSONKits',
  description: 'Fix common JSON errors like trailing commas, missing quotes, and single quotes. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json fixer, json fixer online, json fixer tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
