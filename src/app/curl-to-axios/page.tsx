import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'cURL to Axios - Free Online Converter',
  description: 'Convert cURL commands to Axios HTTP client calls. 100% free, client-side tool with no server uploads.',
  keywords: ['curl to axios, curl to axios online, convert curl to axios, curl to axios converter, axios converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/curl-to-axios/' },
  openGraph: {
    title: 'cURL to Axios - Free Online Converter',
    description: 'Convert cURL commands to Axios HTTP client calls. 100% free, client-side tool with no server uploads.',
    url: 'https://www.jsonkits.net/curl-to-axios/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'cURL to Axios - Free Online Converter',
    description: 'Convert cURL commands to Axios HTTP client calls. 100% free, client-side tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
