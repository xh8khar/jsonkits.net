import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Firestore Converter - Free Online Converter',
  description: 'Convert JSON data to Firestore document format with typed fields. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to firestore, json to firestore online, json to firestore tool, convert json to firestore, json firestore converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-firestore/' },
  openGraph: {
    title: 'JSON to Firestore Converter - Free Online Converter',
    description: 'Convert JSON data to Firestore document format with typed fields. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-firestore/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Firestore Converter - Free Online Converter',
    description: 'Convert JSON data to Firestore document format with typed fields. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
