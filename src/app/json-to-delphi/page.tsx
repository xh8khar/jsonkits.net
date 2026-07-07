import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Delphi - Generate Delphi Pascal Classes',
  description: 'Generate Delphi/Object Pascal class definitions with published properties from JSON data.',
  keywords: ['json to delphi', 'delphi pascal', 'delphi class generator', 'object pascal'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-delphi/' },
  openGraph: {
    title: 'JSON to Delphi - Generate Delphi Pascal Classes',
    description: 'Generate Delphi/Object Pascal class definitions with published properties from JSON data.',
    url: 'https://www.jsonkits.net/json-to-delphi/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Delphi - Generate Delphi Pascal Classes',
    description: 'Generate Delphi/Object Pascal class definitions with published properties from JSON data.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
