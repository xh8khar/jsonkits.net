import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Java Online — Free JSON Tool | JSONKits',
  description: 'Generate Java POJO classes from JSON samples. 100% client-side and free to use.',
  keywords: ['json to java, convert json to java, json java converter, java format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
