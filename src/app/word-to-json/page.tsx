import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Word to JSON Converter - Free Online Converter',
  description: 'Extract JSON data from Word document content. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['word to json, word to json online, word to json tool, convert word to json, word json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/word-to-json/' },
  openGraph: {
    title: 'Word to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from Word document content. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/word-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from Word document content. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
