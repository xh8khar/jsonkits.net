import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PostgreSQL to JSON - Free Online Converter ',
  description: 'Parse PostgreSQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['postgresql to json, postgresql to json online, postgresql to json tool, convert postgresql to json, postgresql json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
