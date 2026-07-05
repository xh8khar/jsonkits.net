import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Unicode Escape to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Unicode escape sequences to readable JSON. 100% client-side and free to use.',
  keywords: ['unicode escape to json, convert unicode escape to json, unicode escape json converter, json converter, unicode escape format, unicode escape parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
