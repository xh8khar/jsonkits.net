import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON i18n Translator - Internationalization Key Manager',
  description: 'Flatten and analyze JSON i18n translation files to see all translation keys organized by language. 100% free, client-side i18n tool.',
  keywords: ['json i18n', 'json translator', 'i18n key manager', 'translation key viewer', 'json localization', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-i18n-translator/' },
  openGraph: {
    title: 'JSON i18n Translator - Internationalization Key Manager',
    description: 'Flatten and analyze JSON i18n translation files to see all translation keys organized by language. 100% free, client-side i18n tool.',
    url: 'https://www.jsonkits.net/json-i18n-translator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON i18n Translator - Internationalization Key Manager',
    description: 'Flatten and analyze JSON i18n translation files to see all translation keys organized by language. 100% free, client-side i18n tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
