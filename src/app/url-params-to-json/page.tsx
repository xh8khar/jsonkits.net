import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'URL Parameters to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert URL parameters back to JSON format. 100% client-side and free to use.',
  keywords: ['url parameters to json, convert url parameters to json, url parameters json converter, json converter, url parameters format, url parameters parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
