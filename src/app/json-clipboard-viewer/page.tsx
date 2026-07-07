import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Clipboard Viewer - Free Online Viewer ',
  description: 'View and explore JSON data pasted from your clipboard. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json clipboard viewer, json clipboard viewer online, json clipboard viewer tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-clipboard-viewer/' },
  openGraph: {
    title: 'JSON Clipboard Viewer - Free Online Viewer ',
    description: 'View and explore JSON data pasted from your clipboard. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-clipboard-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Clipboard Viewer - Free Online Viewer ',
    description: 'View and explore JSON data pasted from your clipboard. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
