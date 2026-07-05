import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JS Object to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert JavaScript object literals to JSON format. 100% client-side and free to use.',
  keywords: ['js object to json, convert js object to json, js object json converter, json converter, js object format, js object parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
