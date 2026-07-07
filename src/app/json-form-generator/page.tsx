import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Form Generator - Generate HTML Forms from JSON',
  description: 'Generate HTML form markup from JSON data structure with appropriate input types. 100% free, client-side JSON form generator.',
  keywords: ['json form generator', 'html form generator', 'form from json', 'json to form', 'auto form generator', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
