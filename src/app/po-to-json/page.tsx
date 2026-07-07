import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PO to JSON - Gettext Translation Converter',
  description: 'Convert GNU Gettext PO files to structured JSON format for web applications.',
  keywords: ['po to json', 'gettext to json', 'po converter', 'gettext converter', 'json translation'],
  alternates: { canonical: 'https://www.jsonkits.net/po-to-json/' },
  openGraph: {
    title: 'PO to JSON - Gettext Translation Converter',
    description: 'Convert GNU Gettext PO files to structured JSON format for web applications.',
    url: 'https://www.jsonkits.net/po-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PO to JSON - Gettext Translation Converter',
    description: 'Convert GNU Gettext PO files to structured JSON format for web applications.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
