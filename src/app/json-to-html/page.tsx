import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to HTML Converter - Free Online Converter',
  description: 'Convert JSON data to a formatted HTML document with syntax highlighting and collapsible sections. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to html, json to html online, json to html tool, convert json to html, json html converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-html/' },
  openGraph: {
    title: 'JSON to HTML Converter - Free Online Converter',
    description: 'Convert JSON data to a formatted HTML document with syntax highlighting and collapsible sections. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-html/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to HTML Converter - Free Online Converter',
    description: 'Convert JSON data to a formatted HTML document with syntax highlighting and collapsible sections. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
