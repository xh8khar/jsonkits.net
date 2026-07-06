import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Converter - Free Online Converter',
  description: 'Generate Python dataclasses from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to python, json to python online, json to python tool, convert json to python, json python converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
