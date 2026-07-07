import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to Fetch API - Free Online Converter',
  description: 'Convert cURL commands to fetch() API calls. 100% free, client-side tool with no server uploads.',
  keywords: ['curl to fetch, curl to fetch api, convert curl to fetch, curl to fetch converter, curl to js fetch, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/curl-to-fetch/' },
  openGraph: {
    title: 'cURL to Fetch API - Free Online Converter',
    description: 'Convert cURL commands to fetch() API calls. 100% free, client-side tool with no server uploads.',
    url: 'https://www.jsonkits.net/curl-to-fetch/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cURL to Fetch API - Free Online Converter',
    description: 'Convert cURL commands to fetch() API calls. 100% free, client-side tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
