import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Form Data to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse form data back into JSON format. 100% client-side and free to use.',
  keywords: ['form data to json, convert form data to json, form data json converter, json converter, form data format, form data parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
