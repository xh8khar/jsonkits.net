import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HAR to JSON Converter',
  description: 'Extract structured JSON data from HTTP Archive (HAR) file entries. 100% free, client-side HAR to JSON converter tool.',
  keywords: ['har to json', 'har file to json', 'convert har to json', 'http archive to json', 'network log to json', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
