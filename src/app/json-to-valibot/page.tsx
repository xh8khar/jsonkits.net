import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Valibot Schema - Free Online Tool',
  description: 'Generate Valibot validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to valibot schema', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-valibot/' },
  openGraph: {
    title: 'JSON to Valibot Schema - Free Online Tool',
    description: 'Generate Valibot validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-valibot/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Valibot Schema - Free Online Tool',
    description: 'Generate Valibot validation schemas from JSON data samples for TypeScript runtime validation. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
