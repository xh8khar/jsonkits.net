import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to vCard - Contact File Generator',
  description: 'Convert structured JSON contact data to vCard (.vcf) format.',
  keywords: ['json to vcard', 'json to vcf', 'contact generator', 'vcard creator', 'vcf generator'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-vcard/' },
  openGraph: {
    title: 'JSON to vCard - Contact File Generator',
    description: 'Convert structured JSON contact data to vCard (.vcf) format.',
    url: 'https://www.jsonkits.net/json-to-vcard/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to vCard - Contact File Generator',
    description: 'Convert structured JSON contact data to vCard (.vcf) format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
