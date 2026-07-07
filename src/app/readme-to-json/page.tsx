import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'README to JSON Converter - Free Online Converter',
  description: 'Extract JSON data from structured README documents. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['readme to json, readme to json online, readme to json tool, convert readme to json, readme json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/readme-to-json/' },
  openGraph: {
    title: 'README to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from structured README documents. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/readme-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'README to JSON Converter - Free Online Converter',
    description: 'Extract JSON data from structured README documents. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
