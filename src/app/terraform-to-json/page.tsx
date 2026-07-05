import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Terraform to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Terraform variables files to JSON format. 100% client-side and free to use.',
  keywords: ['terraform to json, convert terraform to json, terraform json converter, json converter, terraform format, terraform parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
