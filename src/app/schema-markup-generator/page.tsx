import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Schema Markup Generator - JSON-LD Schema Generator',
  description: 'Generate schema.org JSON-LD markup with script tags for SEO and rich snippets. 100% free, client-side schema markup generator.',
  keywords: ['schema markup generator', 'json-ld schema', 'schema.org generator', 'seo schema markup', 'rich snippet generator', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
