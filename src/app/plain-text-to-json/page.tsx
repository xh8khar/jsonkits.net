import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Plain Text to JSON - Free Online Converter ',
  description: 'Convert key: value text back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['plain text to json, plain text to json online, plain text to json tool, convert plain text to json, plain text json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
