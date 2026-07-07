import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Sitemap to JSON Converter',
  description: 'Parse XML sitemap files and convert to structured JSON with all URL entries.',
  keywords: ['sitemap to json', 'sitemap parser', 'xml sitemap', 'seo tools'],
}

export default function Page() {
  return <ToolPageClient />
}
