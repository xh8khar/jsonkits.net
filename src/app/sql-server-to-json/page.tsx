import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQL Server to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse SQL Server INSERT statements back into JSON format. 100% client-side and free to use.',
  keywords: ['sql server to json, convert sql server to json, sql server json converter, json converter, sql server format, sql server parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
