import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Properties to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Java .properties files to JSON format. 100% client-side and free to use.',
  keywords: ['properties to json, convert properties to json, properties json converter, json converter, properties format, properties parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
