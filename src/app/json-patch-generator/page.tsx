import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Patch Generator - Free Online Converter ',
  description: 'Generate RFC 6902 JSON Patch operations between two JSON objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json patch generator, json patch generator online, json patch generator tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-patch-generator/' },
  openGraph: {
    title: 'JSON Patch Generator - Free Online Converter ',
    description: 'Generate RFC 6902 JSON Patch operations between two JSON objects. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-patch-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Patch Generator - Free Online Converter ',
    description: 'Generate RFC 6902 JSON Patch operations between two JSON objects. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
