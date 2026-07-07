import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Word Converter - Free Online Converter',
  description: 'Convert JSON data to a downloadable Word document format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to word, json to word online, json to word tool, convert json to word, json word converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-word/' },
  openGraph: {
    title: 'JSON to Word Converter - Free Online Converter',
    description: 'Convert JSON data to a downloadable Word document format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-word/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Word Converter - Free Online Converter',
    description: 'Convert JSON data to a downloadable Word document format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
