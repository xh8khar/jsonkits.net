import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TypeScript Enum - Free Online Tool ',
  description: 'Generate TypeScript enum definitions from JSON constant objects for strongly-typed code. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to typescript enum', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
