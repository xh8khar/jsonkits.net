import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON URL Viewer - Free Online Viewer ',
  description: 'Fetch and display JSON data from a remote URL endpoint. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json url viewer, json url viewer online, json url viewer tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-url-viewer/' },
  openGraph: {
    title: 'JSON URL Viewer - Free Online Viewer ',
    description: 'Fetch and display JSON data from a remote URL endpoint. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-url-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON URL Viewer - Free Online Viewer ',
    description: 'Fetch and display JSON data from a remote URL endpoint. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
