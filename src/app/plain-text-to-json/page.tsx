import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Plain Text to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert key: value text back into JSON format. 100% client-side and free to use.',
  keywords: ['plain text to json, convert plain text to json, plain text json converter, json converter, plain text format, plain text parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
