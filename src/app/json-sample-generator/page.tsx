import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Sample Generator - Free Online Generator ',
  description: 'Generate deterministic sample JSON from a type template. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json sample generator, json sample generator online, json sample generator tool, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-sample-generator/' },
  openGraph: {
    title: 'JSON Sample Generator - Free Online Generator ',
    description: 'Generate deterministic sample JSON from a type template. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-sample-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Sample Generator - Free Online Generator ',
    description: 'Generate deterministic sample JSON from a type template. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
