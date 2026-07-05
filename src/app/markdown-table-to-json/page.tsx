import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Markdown Table to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Markdown tables to structured JSON format. 100% client-side and free to use.',
  keywords: ['markdown table to json, convert markdown table to json, markdown table json converter, json converter, markdown table format, markdown table parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
