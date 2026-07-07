import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Django Model - Python Model Generator',
  description: 'Generate Django model classes from JSON data structure samples for rapid prototyping.',
  keywords: ['json to django model', 'json to django', 'django model generator', 'python model generator', 'django schema'],
}

export default function Page() {
  return <ToolPageClient />
}
