import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JSON5 Converter',
  description: 'Convert standard JSON to JSON5 format with unquoted keys for cleaner configuration files. 100% free, client-side JSON to JSON5 converter.',
  keywords: ['json to json5', 'json converter', 'convert json to json5', 'json5 format', 'json5 configuration', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
