import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL UPDATE - Free Online Converter | JSONKits',
  description: 'Generate SQL UPDATE statements from JSON data for database record modifications.',
  keywords: ['json to sql update, json to sql update online, json to sql update tool, json to sql update, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
