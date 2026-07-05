import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Unicode Escape - Free Online Converter | JSONKits',
  description: 'Convert JSON to Unicode escape sequences. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to unicode escape, json to unicode escape online, json to unicode escape tool, convert json to unicode escape, json unicode escape converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
