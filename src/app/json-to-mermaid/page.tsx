import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Mermaid Converter - Free Online Converter',
  description: 'Generate Mermaid.js flowchart diagrams from JSON structures. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mermaid, json to mermaid online, json to mermaid tool, convert json to mermaid, json mermaid converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-mermaid/' },
  openGraph: {
    title: 'JSON to Mermaid Converter - Free Online Converter',
    description: 'Generate Mermaid.js flowchart diagrams from JSON structures. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-mermaid/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Mermaid Converter - Free Online Converter',
    description: 'Generate Mermaid.js flowchart diagrams from JSON structures. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
