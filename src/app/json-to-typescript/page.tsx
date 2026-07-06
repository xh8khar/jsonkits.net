import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Converter - Free Online Converter',
  description: 'Generate TypeScript interfaces from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to typescript, json to typescript online, json to typescript tool, convert json to typescript, json typescript converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
