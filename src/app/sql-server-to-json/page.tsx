import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQL Server to JSON - Free Online Converter | JSONKits',
  description: 'Parse SQL Server INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['sql server to json, sql server to json online, sql server to json tool, convert sql server to json, sql server json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
