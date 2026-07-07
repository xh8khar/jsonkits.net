import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Data Anonymizer - Free Online Tool ',
  description: 'Anonymize sensitive data in JSON including emails, passwords, tokens, and PII. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json data anonymizer, json pii masker, json sensitive data, anonymize json, json data privacy, json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-data-anonymizer/' },
  openGraph: {
    title: 'JSON Data Anonymizer - Free Online Tool ',
    description: 'Anonymize sensitive data in JSON including emails, passwords, tokens, and PII. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-data-anonymizer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Data Anonymizer - Free Online Tool ',
    description: 'Anonymize sensitive data in JSON including emails, passwords, tokens, and PII. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
