import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Django Model - Python Model Generator',
  description: 'Generate Django model classes from JSON data structure samples for rapid prototyping.',
  keywords: ['json to django model', 'json to django', 'django model generator', 'python model generator', 'django schema'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-django-model/' },
  openGraph: {
    title: 'JSON to Django Model - Python Model Generator',
    description: 'Generate Django model classes from JSON data structure samples for rapid prototyping.',
    url: 'https://www.jsonkits.net/json-to-django-model/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Django Model - Python Model Generator',
    description: 'Generate Django model classes from JSON data structure samples for rapid prototyping.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
