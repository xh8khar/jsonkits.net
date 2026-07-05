import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to YAML Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to YAML format for configuration files. 100% client-side and free to use.',
  keywords: ['json to yaml, convert json to yaml, json yaml converter, yaml format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
