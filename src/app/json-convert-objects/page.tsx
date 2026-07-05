import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Convert to Array - Free Online Converter | JSONKits',
  description: 'Transpose object of arrays back into array of objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json convert to array, json convert to array online, json convert to array tool, json convert objects online, json convert objects tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
