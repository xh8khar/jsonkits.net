import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to COBOL - Free Online Converter | JSONKits',
  description: 'Generate COBOL data division structures from JSON data samples for mainframe and enterprise systems.',
  keywords: ['json to cobol, json to cobol online, json to cobol tool, json to cobol, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
