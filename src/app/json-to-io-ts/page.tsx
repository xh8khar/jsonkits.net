import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to io-ts - Free Online Tool',
  description: 'Generate io-ts runtime type codecs from JSON data samples for functional TypeScript. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to io-ts', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-io-ts/' },
  openGraph: {
    title: 'JSON to io-ts - Free Online Tool',
    description: 'Generate io-ts runtime type codecs from JSON data samples for functional TypeScript. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-io-ts/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to io-ts - Free Online Tool',
    description: 'Generate io-ts runtime type codecs from JSON data samples for functional TypeScript. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
