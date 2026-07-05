import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MATLAB - Free Online Converter | JSONKits',
  description: 'Convert JSON to MATLAB struct syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to matlab, json to matlab online, json to matlab tool, convert json to matlab, json matlab converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
