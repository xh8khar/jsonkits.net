import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Tree Viewer - Free Online Viewer ',
  description: 'Visualize JSON data as an interactive tree structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json tree viewer, json tree viewer online, json tree viewer tool, json viewer, json parser, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-tree-viewer/' },
  openGraph: {
    title: 'JSON Tree Viewer - Free Online Viewer ',
    description: 'Visualize JSON data as an interactive tree structure. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-tree-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Tree Viewer - Free Online Viewer ',
    description: 'Visualize JSON data as an interactive tree structure. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
