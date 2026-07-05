import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Perl - Free Online Converter | JSONKits',
  description: 'Convert JSON to Perl data structure syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to perl, json to perl online, json to perl tool, convert json to perl, json perl converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
