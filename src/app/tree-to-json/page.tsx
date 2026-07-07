import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Tree View to JSON - Free Online Converter ',
  description: 'Parse indented tree view back into structured JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['tree view to json, tree view to json online, tree view to json tool, tree to json online, tree to json tool, tree to json, convert tree to json, tree json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/tree-to-json/' },
  openGraph: {
    title: 'Tree View to JSON - Free Online Converter ',
    description: 'Parse indented tree view back into structured JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/tree-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tree View to JSON - Free Online Converter ',
    description: 'Parse indented tree view back into structured JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
