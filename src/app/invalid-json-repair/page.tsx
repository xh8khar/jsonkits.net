import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Invalid JSON Repair - Free Online Validator | JSONKits',
  description: 'Repair malformed JSON by detecting and fixing common syntax issues. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['invalid json repair, invalid json repair online, invalid json repair tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
