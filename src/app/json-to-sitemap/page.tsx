import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Sitemap Generator',
  description: 'Convert JSON sitemap data to XML sitemap format for search engine indexing.',
  keywords: ['json to sitemap', 'sitemap generator', 'xml sitemap', 'seo sitemap'],
}

export default function Page() {
  return <ToolPageClient />
}
