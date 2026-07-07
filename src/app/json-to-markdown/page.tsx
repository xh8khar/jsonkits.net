import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Markdown Converter - Free Online Converter',
  description: 'Convert JSON data to a Markdown code block with syntax highlighting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to markdown, json to markdown online, json to markdown tool, convert json to markdown, json markdown converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-markdown/' },
  openGraph: {
    title: 'JSON to Markdown Converter - Free Online Converter',
    description: 'Convert JSON data to a Markdown code block with syntax highlighting. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-markdown/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Markdown Converter - Free Online Converter',
    description: 'Convert JSON data to a Markdown code block with syntax highlighting. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
