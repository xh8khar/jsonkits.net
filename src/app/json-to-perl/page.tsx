import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Perl Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to Perl data structure syntax. 100% client-side and free to use.',
  keywords: ['json to perl, convert json to perl, json perl converter, perl format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
