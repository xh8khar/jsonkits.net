import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MySQL - Free Online Converter ',
  description: 'Generate MySQL CREATE TABLE and INSERT statements from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mysql, json to mysql online, json to mysql tool, convert json to mysql, json mysql converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
