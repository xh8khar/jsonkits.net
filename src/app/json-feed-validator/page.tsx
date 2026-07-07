import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Feed Validator - Free Online Tool',
  description: 'Validate your JSON Feed against the JSON Feed specification (version 1.1). 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json feed validator', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-feed-validator/' },
  openGraph: {
    title: 'JSON Feed Validator - Free Online Tool',
    description: 'Validate your JSON Feed against the JSON Feed specification (version 1.1). 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-feed-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Feed Validator - Free Online Tool',
    description: 'Validate your JSON Feed against the JSON Feed specification (version 1.1). 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
