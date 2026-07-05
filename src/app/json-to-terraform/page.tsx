import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Terraform Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to Terraform variables format. 100% client-side and free to use.',
  keywords: ['json to terraform, convert json to terraform, json terraform converter, terraform format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
