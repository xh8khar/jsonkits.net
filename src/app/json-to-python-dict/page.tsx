import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Python Dict - Free Online Converter ',
  description: 'Generate Python dictionary literal syntax from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to python dict, json to python dict online, json to python dict tool, convert json to python dict, json python dict converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
