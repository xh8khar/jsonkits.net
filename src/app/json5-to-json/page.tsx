import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON5 to JSON Converter',
  description: 'Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format. 100% free, client-side JSON5 converter tool.',
  keywords: ['json5 to json', 'json5 converter', 'convert json5 to json', 'json5 to json online', 'json with comments', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json5-to-json/' },
  openGraph: {
    title: 'JSON5 to JSON Converter',
    description: 'Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format. 100% free, client-side JSON5 converter tool.',
    url: 'https://www.jsonkits.net/json5-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON5 to JSON Converter',
    description: 'Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format. 100% free, client-side JSON5 converter tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
