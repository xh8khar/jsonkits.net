import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Terraform - Free Online Converter ',
  description: 'Convert JSON data to Terraform variables format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to terraform, json to terraform online, json to terraform tool, convert json to terraform, json terraform converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
