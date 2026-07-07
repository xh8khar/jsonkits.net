import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON-LD Generator - Structured Data Generator',
  description: 'Generate JSON-LD structured data with schema.org context for SEO and semantic web. 100% free, client-side JSON-LD generator.',
  keywords: ['json-ld generator', 'structured data generator', 'schema.org json-ld', 'seo structured data', 'jsonld generator', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
