import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JSONL Converter',
  description: 'Convert a JSON array to JSON Lines (JSONL/NDJSON) format with one object per line. 100% free, client-side JSON to JSONL converter.',
  keywords: ['json to jsonl', 'json to json lines', 'json to ndjson', 'convert json to jsonl', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
