import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Zod Schema - Free Online Tool ',
  description: 'Generate Zod validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to zod schema', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-zod-schema/' },
  openGraph: {
    title: 'JSON to Zod Schema - Free Online Tool ',
    description: 'Generate Zod validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-zod-schema/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Zod Schema - Free Online Tool ',
    description: 'Generate Zod validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
