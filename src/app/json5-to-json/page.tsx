import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON5 to JSON Converter',
  description: 'Convert JSON5 (JSON with comments, trailing commas, unquoted keys) to standard JSON format. 100% free, client-side JSON5 converter tool.',
  keywords: ['json5 to json', 'json5 converter', 'convert json5 to json', 'json5 to json online', 'json with comments', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
