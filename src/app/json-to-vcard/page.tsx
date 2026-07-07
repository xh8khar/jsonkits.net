import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to vCard - Contact File Generator',
  description: 'Convert structured JSON contact data to vCard (.vcf) format.',
  keywords: ['json to vcard', 'json to vcf', 'contact generator', 'vcard creator', 'vcf generator'],
}

export default function Page() {
  return <ToolPageClient />
}
