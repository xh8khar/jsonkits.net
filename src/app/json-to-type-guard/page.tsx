import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Type Guard - Free Online Tool ',
  description: 'Generate TypeScript type guard functions for runtime type checking of JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to type guard', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-type-guard/' },
  openGraph: {
    title: 'JSON to TypeScript Type Guard - Free Online Tool ',
    description: 'Generate TypeScript type guard functions for runtime type checking of JSON data structures. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-type-guard/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to TypeScript Type Guard - Free Online Tool ',
    description: 'Generate TypeScript type guard functions for runtime type checking of JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
