import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to iOS .strings - iOS Localization Converter',
  description: 'Convert JSON translation files to Apple iOS .strings file format.',
  keywords: ['json to ios strings', 'json to strings', 'ios localization', 'apple strings file', 'localization converter'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-ios-strings/' },
  openGraph: {
    title: 'JSON to iOS .strings - iOS Localization Converter',
    description: 'Convert JSON translation files to Apple iOS .strings file format.',
    url: 'https://www.jsonkits.net/json-to-ios-strings/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to iOS .strings - iOS Localization Converter',
    description: 'Convert JSON translation files to Apple iOS .strings file format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
