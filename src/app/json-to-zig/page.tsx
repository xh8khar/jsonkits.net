import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Zig Converter - Free Online Converter',
  description: 'Generate Zig struct definitions with JSON support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to zig, json to zig online, json to zig tool, convert json to zig, json zig converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-zig/' },
  openGraph: {
    title: 'JSON to Zig Converter - Free Online Converter',
    description: 'Generate Zig struct definitions with JSON support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-zig/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Zig Converter - Free Online Converter',
    description: 'Generate Zig struct definitions with JSON support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
