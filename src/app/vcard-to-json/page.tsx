import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'vCard to JSON - Contact File Converter',
  description: 'Convert vCard (.vcf) contact files to structured JSON format.',
  keywords: ['vcard to json', 'vcf to json', 'contact converter', 'vcard parser', 'vcf converter'],
}

export default function Page() {
  return <ToolPageClient />
}
