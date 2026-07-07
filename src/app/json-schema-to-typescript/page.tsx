import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Schema to TypeScript - Free Online Converter ',
  description: 'Generate TypeScript interfaces from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json schema to typescript, json schema to typescript online, json schema to typescript tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-schema-to-typescript/' },
  openGraph: {
    title: 'JSON Schema to TypeScript - Free Online Converter ',
    description: 'Generate TypeScript interfaces from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-schema-to-typescript/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Schema to TypeScript - Free Online Converter ',
    description: 'Generate TypeScript interfaces from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
