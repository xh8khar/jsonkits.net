import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to YAML - Free Online Converter ',
  description: 'Convert JSON data to YAML format for configuration files. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to yaml, json to yaml online, json to yaml tool, convert json to yaml, json yaml converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
