import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQLite to JSON - Free Online Converter ',
  description: 'Parse SQLite INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['sqlite to json, sqlite to json online, sqlite to json tool, convert sqlite to json, sqlite json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
