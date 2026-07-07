import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'strings.xml to JSON - Android Localization Converter',
  description: 'Convert Android strings.xml resource files to structured JSON format.',
  keywords: ['strings xml to json', 'android strings xml', 'android localization', 'xml to json', 'resource converter'],
}

export default function Page() {
  return <ToolPageClient />
}
