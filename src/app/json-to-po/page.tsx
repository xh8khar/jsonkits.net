import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PO - JSON to Gettext Converter',
  description: 'Convert JSON translation files to GNU Gettext PO format.',
  keywords: ['json to po', 'json to gettext', 'po converter', 'gettext converter', 'i18n translation'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-po/' },
  openGraph: {
    title: 'JSON to PO - JSON to Gettext Converter',
    description: 'Convert JSON translation files to GNU Gettext PO format.',
    url: 'https://www.jsonkits.net/json-to-po/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PO - JSON to Gettext Converter',
    description: 'Convert JSON translation files to GNU Gettext PO format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
