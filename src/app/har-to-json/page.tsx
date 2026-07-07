import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'HAR to JSON Converter',
  description: 'Extract structured JSON data from HTTP Archive (HAR) file entries. 100% free, client-side HAR to JSON converter tool.',
  keywords: ['har to json', 'har file to json', 'convert har to json', 'http archive to json', 'network log to json', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/har-to-json/' },
  openGraph: {
    title: 'HAR to JSON Converter',
    description: 'Extract structured JSON data from HTTP Archive (HAR) file entries. 100% free, client-side HAR to JSON converter tool.',
    url: 'https://www.jsonkits.net/har-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAR to JSON Converter',
    description: 'Extract structured JSON data from HTTP Archive (HAR) file entries. 100% free, client-side HAR to JSON converter tool.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
