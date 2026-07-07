import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Explorer - Free Online Viewer ',
  description: 'Interactively explore JSON data with expandable tree view. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json explorer, json explorer online, json explorer tool, json viewer, json parser, json tree viewer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-explorer/' },
  openGraph: {
    title: 'JSON Explorer - Free Online Viewer ',
    description: 'Interactively explore JSON data with expandable tree view. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-explorer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Explorer - Free Online Viewer ',
    description: 'Interactively explore JSON data with expandable tree view. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
