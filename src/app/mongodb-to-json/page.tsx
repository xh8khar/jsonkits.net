import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'MongoDB to JSON Converter - Free Online Converter',
  description: 'Convert MongoDB documents to standard JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['mongodb to json, mongodb to json online, mongodb to json tool, convert mongodb to json, mongodb json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/mongodb-to-json/' },
  openGraph: {
    title: 'MongoDB to JSON Converter - Free Online Converter',
    description: 'Convert MongoDB documents to standard JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/mongodb-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MongoDB to JSON Converter - Free Online Converter',
    description: 'Convert MongoDB documents to standard JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
