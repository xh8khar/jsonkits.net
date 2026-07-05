import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Word to JSON - Free Online Converter ',
  description: 'Extract JSON data from Word document content. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['word to json, word to json online, word to json tool, convert word to json, word json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
