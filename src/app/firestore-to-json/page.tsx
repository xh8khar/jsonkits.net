import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Firestore to JSON Converter - Free Online Converter',
  description: 'Convert Firestore document format back to standard JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['firestore to json, firestore to json online, firestore to json tool, convert firestore to json, firestore json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/firestore-to-json/' },
  openGraph: {
    title: 'Firestore to JSON Converter - Free Online Converter',
    description: 'Convert Firestore document format back to standard JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/firestore-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firestore to JSON Converter - Free Online Converter',
    description: 'Convert Firestore document format back to standard JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
