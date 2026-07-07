import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Kotlin Converter - Free Online Converter',
  description: 'Generate Kotlin data classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to kotlin, json to kotlin online, json to kotlin tool, convert json to kotlin, json kotlin converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-kotlin/' },
  openGraph: {
    title: 'JSON to Kotlin Converter - Free Online Converter',
    description: 'Generate Kotlin data classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-kotlin/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Kotlin Converter - Free Online Converter',
    description: 'Generate Kotlin data classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
