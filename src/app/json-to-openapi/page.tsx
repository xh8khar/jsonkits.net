import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to OpenAPI Converter - Free Online Converter',
  description: 'Generate OpenAPI 3.0 schema components from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to openapi, json to openapi online, json to openapi tool, convert json to openapi, json openapi converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-openapi/' },
  openGraph: {
    title: 'JSON to OpenAPI Converter - Free Online Converter',
    description: 'Generate OpenAPI 3.0 schema components from JSON samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-openapi/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to OpenAPI Converter - Free Online Converter',
    description: 'Generate OpenAPI 3.0 schema components from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
