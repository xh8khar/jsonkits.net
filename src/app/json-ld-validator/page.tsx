import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON-LD Validator - Validate Structured Data',
  description: 'Validate JSON-LD structured data for required fields like @context and @type. 100% free, client-side JSON-LD validator tool.',
  keywords: ['json-ld validator', 'structured data validator', 'schema.org validator', 'jsonld validation', 'seo validator', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
