import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQL Server Online — Free JSON Tool | JSONKits',
  description: 'Generate SQL Server CREATE TABLE and INSERT statements from JSON. 100% client-side and free to use.',
  keywords: ['json to sql server, convert json to sql server, json sql server converter, sql server format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
