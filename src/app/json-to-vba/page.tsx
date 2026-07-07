import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to VBA - Generate VBA Class Modules',
  description: 'Generate VBA (Visual Basic for Applications) class modules with properties from JSON data.',
  keywords: ['json to vba', 'vba class generator', 'vba module', 'json to visual basic'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-vba/' },
  openGraph: {
    title: 'JSON to VBA - Generate VBA Class Modules',
    description: 'Generate VBA (Visual Basic for Applications) class modules with properties from JSON data.',
    url: 'https://www.jsonkits.net/json-to-vba/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to VBA - Generate VBA Class Modules',
    description: 'Generate VBA (Visual Basic for Applications) class modules with properties from JSON data.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
