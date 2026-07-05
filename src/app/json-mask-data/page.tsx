import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Mask Data Online — Free JSON Tool | JSONKits',
  description: 'Mask sensitive fields in JSON (passwords, tokens, emails, SSN). 100% client-side and free to use.',
  keywords: ['json formatter, json beautifier, pretty print json, format json online, json prettier, json indentation, json formatting tool, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
