import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Tree View - Free Online Converter ',
  description: 'Generate a visual indented tree view from JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to tree view, json to tree view online, json to tree view tool, json to tree online, json to tree tool, json to tree, convert json to tree, json tree converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-tree/' },
  openGraph: {
    title: 'JSON to Tree View - Free Online Converter ',
    description: 'Generate a visual indented tree view from JSON data. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-tree/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Tree View - Free Online Converter ',
    description: 'Generate a visual indented tree view from JSON data. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
