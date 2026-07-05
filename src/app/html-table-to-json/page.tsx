import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HTML Table to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert HTML tables to structured JSON format. 100% client-side and free to use.',
  keywords: ['html table to json, convert html table to json, html table json converter, json converter, html table format, html table parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
