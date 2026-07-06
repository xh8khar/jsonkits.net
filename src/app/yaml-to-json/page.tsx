import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'YAML to JSON Converter - Free Online Converter',
  description: 'Convert YAML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['yaml to json, yaml to json online, yaml to json tool, convert yaml to json, yaml json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
