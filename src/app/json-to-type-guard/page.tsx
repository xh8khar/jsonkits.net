import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Type Guard - Free Online Tool ',
  description: 'Generate TypeScript type guard functions for runtime type checking of JSON data structures. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to type guard', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
