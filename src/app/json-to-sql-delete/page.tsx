import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL DELETE - Free Online Converter | JSONKits',
  description: 'Generate SQL DELETE statements with WHERE clauses from JSON data for record removal.',
  keywords: ['json to sql delete, json to sql delete online, json to sql delete tool, json to sql delete, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
