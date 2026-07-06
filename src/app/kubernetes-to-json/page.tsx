import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Kubernetes to JSON Converter - Free Online Converter',
  description: 'Convert Kubernetes manifest YAML to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['kubernetes to json, kubernetes to json online, kubernetes to json tool, convert kubernetes to json, kubernetes json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
