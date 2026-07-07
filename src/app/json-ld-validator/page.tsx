import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON-LD Validator - Validate Structured Data',
  description: 'Validate JSON-LD structured data for required fields like @context and @type. 100% free, client-side JSON-LD validator tool.',
  keywords: ['json-ld validator', 'structured data validator', 'schema.org validator', 'jsonld validation', 'seo validator', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-ld-validator/' },
  openGraph: {
    title: 'JSON-LD Validator - Validate Structured Data',
    description: 'Validate JSON-LD structured data for required fields like @context and @type. 100% free, client-side JSON-LD validator tool.',
    url: 'https://www.jsonkits.net/json-ld-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON-LD Validator - Validate Structured Data',
    description: 'Validate JSON-LD structured data for required fields like @context and @type. 100% free, client-side JSON-LD validator tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
