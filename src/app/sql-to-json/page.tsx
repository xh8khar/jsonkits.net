import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SQL INSERT to JSON - Free Online Converter ',
  description: 'Parse SQL INSERT statements into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['sql insert to json, sql insert to json online, sql insert to json tool, sql to json online, sql to json tool, sql to json, convert sql to json, sql json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
