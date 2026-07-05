import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Hex to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert hexadecimal strings back to JSON format. 100% client-side and free to use.',
  keywords: ['hex to json, convert hex to json, hex json converter, json converter, hex format, hex parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
