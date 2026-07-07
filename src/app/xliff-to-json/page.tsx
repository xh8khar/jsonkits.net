import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'XLIFF to JSON - XLIFF Translation Converter',
  description: 'Convert XLIFF 1.2 translation files to structured JSON format.',
  keywords: ['xliff to json', 'xliff converter', 'xliff translation', 'localization converter', 'i18n'],
  alternates: { canonical: 'https://www.jsonkits.net/xliff-to-json/' },
  openGraph: {
    title: 'XLIFF to JSON - XLIFF Translation Converter',
    description: 'Convert XLIFF 1.2 translation files to structured JSON format.',
    url: 'https://www.jsonkits.net/xliff-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XLIFF to JSON - XLIFF Translation Converter',
    description: 'Convert XLIFF 1.2 translation files to structured JSON format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
