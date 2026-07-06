import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to Fetch API - Free Online Converter',
  description: 'Convert cURL commands to fetch() API calls. 100% free, client-side tool with no server uploads.',
  keywords: ['curl to fetch, curl to fetch api, convert curl to fetch, curl to fetch converter, curl to js fetch, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
