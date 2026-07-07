import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Elm Converter - Free Online Converter',
  description: 'Generate Elm type aliases from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to elm, json to elm online, json to elm tool, convert json to elm, json elm converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-elm/' },
  openGraph: {
    title: 'JSON to Elm Converter - Free Online Converter',
    description: 'Generate Elm type aliases from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-elm/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Elm Converter - Free Online Converter',
    description: 'Generate Elm type aliases from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
