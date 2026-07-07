import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Timestamp Converter - Free Online Tool',
  description: 'Detect and convert all timestamps in JSON between Unix, ISO 8601, and locale formats. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json timestamp converter', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-timestamp-converter/' },
  openGraph: {
    title: 'JSON Timestamp Converter - Free Online Tool',
    description: 'Detect and convert all timestamps in JSON between Unix, ISO 8601, and locale formats. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-timestamp-converter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Timestamp Converter - Free Online Tool',
    description: 'Detect and convert all timestamps in JSON between Unix, ISO 8601, and locale formats. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
