import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Kubernetes to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Kubernetes manifest YAML to JSON format. 100% client-side and free to use.',
  keywords: ['kubernetes to json, convert kubernetes to json, kubernetes json converter, json converter, kubernetes format, kubernetes parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
