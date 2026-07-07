import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to R Converter - Free Online Converter',
  description: 'Convert JSON to R list syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to r, json to r online, json to r tool, convert json to r, json r converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-r/' },
  openGraph: {
    title: 'JSON to R Converter - Free Online Converter',
    description: 'Convert JSON to R list syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-r/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to R Converter - Free Online Converter',
    description: 'Convert JSON to R list syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
