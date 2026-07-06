import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'MySQL to JSON Converter - Free Online Converter',
  description: 'Parse MySQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['mysql to json, mysql to json online, mysql to json tool, convert mysql to json, mysql json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
