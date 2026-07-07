import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Markdown Table to JSON - Free Online Converter ',
  description: 'Convert Markdown tables to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['markdown table to json, markdown table to json online, markdown table to json tool, convert markdown table to json, markdown table json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/markdown-table-to-json/' },
  openGraph: {
    title: 'Markdown Table to JSON - Free Online Converter ',
    description: 'Convert Markdown tables to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/markdown-table-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown Table to JSON - Free Online Converter ',
    description: 'Convert Markdown tables to structured JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
