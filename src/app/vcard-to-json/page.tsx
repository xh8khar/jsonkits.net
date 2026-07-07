import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'vCard to JSON - Contact File Converter',
  description: 'Convert vCard (.vcf) contact files to structured JSON format.',
  keywords: ['vcard to json', 'vcf to json', 'contact converter', 'vcard parser', 'vcf converter'],
  alternates: { canonical: 'https://www.jsonkits.net/vcard-to-json/' },
  openGraph: {
    title: 'vCard to JSON - Contact File Converter',
    description: 'Convert vCard (.vcf) contact files to structured JSON format.',
    url: 'https://www.jsonkits.net/vcard-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vCard to JSON - Contact File Converter',
    description: 'Convert vCard (.vcf) contact files to structured JSON format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
