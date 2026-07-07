import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Random Generator - Free Online Generator ',
  description: 'Generate random JSON data with configurable types and depth. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json random generator, json random generator online, json random generator tool, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-random-generator/' },
  openGraph: {
    title: 'JSON Random Generator - Free Online Generator ',
    description: 'Generate random JSON data with configurable types and depth. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-random-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Random Generator - Free Online Generator ',
    description: 'Generate random JSON data with configurable types and depth. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
