import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Kubernetes Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to Kubernetes manifest YAML. 100% client-side and free to use.',
  keywords: ['json to kubernetes, convert json to kubernetes, json kubernetes converter, kubernetes format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
