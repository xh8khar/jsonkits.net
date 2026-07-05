import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MATLAB Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to MATLAB struct syntax. 100% client-side and free to use.',
  keywords: ['json to matlab, convert json to matlab, json matlab converter, matlab format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
