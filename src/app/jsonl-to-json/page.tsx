import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSONL to JSON Converter',
  description: 'Convert JSON Lines (JSONL/NDJSON) format to a standard JSON array. 100% free, client-side JSONL to JSON converter tool.',
  keywords: ['jsonl to json', 'json lines to json', 'ndjson to json', 'convert jsonl to json', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/jsonl-to-json/' },
  openGraph: {
    title: 'JSONL to JSON Converter',
    description: 'Convert JSON Lines (JSONL/NDJSON) format to a standard JSON array. 100% free, client-side JSONL to JSON converter tool.',
    url: 'https://www.jsonkits.net/jsonl-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSONL to JSON Converter',
    description: 'Convert JSON Lines (JSONL/NDJSON) format to a standard JSON array. 100% free, client-side JSONL to JSON converter tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
