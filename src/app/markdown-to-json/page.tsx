import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Markdown to JSON Converter - Free Online Converter',
  description: 'Extract JSON data from Markdown code blocks. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['markdown to json, markdown to json online, markdown to json tool, convert markdown to json, markdown json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/markdown-to-json/' },
  openGraph: {
    title: 'Markdown to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from Markdown code blocks. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/markdown-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from Markdown code blocks. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
