import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to Ky - Free Online Converter',
  description: 'Convert cURL commands to Ky HTTP client calls. 100% free, client-side tool with no server uploads.',
  keywords: ['curl to ky, curl to ky online, convert curl to ky, curl to ky converter, ky converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
