import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Dart Converter - Free Online Converter',
  description: 'Generate Dart model classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to dart, json to dart online, json to dart tool, convert json to dart, json dart converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-dart/' },
  openGraph: {
    title: 'JSON to Dart Converter - Free Online Converter',
    description: 'Generate Dart model classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-dart/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Dart Converter - Free Online Converter',
    description: 'Generate Dart model classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
