import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'strings.xml to JSON - Android Localization Converter',
  description: 'Convert Android strings.xml resource files to structured JSON format.',
  keywords: ['strings xml to json', 'android strings xml', 'android localization', 'xml to json', 'resource converter'],
  alternates: { canonical: 'https://www.jsonkits.net/strings-xml-to-json/' },
  openGraph: {
    title: 'strings.xml to JSON - Android Localization Converter',
    description: 'Convert Android strings.xml resource files to structured JSON format.',
    url: 'https://www.jsonkits.net/strings-xml-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'strings.xml to JSON - Android Localization Converter',
    description: 'Convert Android strings.xml resource files to structured JSON format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
