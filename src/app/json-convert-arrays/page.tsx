import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Convert to Object - Free Online Converter | JSONKits',
  description: 'Transpose array of objects into object of arrays. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json convert to object, json convert to object online, json convert to object tool, json convert arrays online, json convert arrays tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
