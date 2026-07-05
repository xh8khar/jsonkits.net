import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'YAML to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert YAML configuration files to JSON format. 100% client-side and free to use.',
  keywords: ['yaml to json, convert yaml to json, yaml json converter, json converter, yaml format, yaml parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
