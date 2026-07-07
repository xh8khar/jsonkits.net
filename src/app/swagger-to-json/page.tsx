import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Swagger to JSON Converter - Free Online Converter',
  description: 'Extract sample JSON data from Swagger 2.0 API definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['swagger to json, swagger to json online, swagger to json tool, convert swagger to json, swagger json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/swagger-to-json/' },
  openGraph: {
    title: 'Swagger to JSON Converter - Free Online Converter',
    description: 'Extract sample JSON data from Swagger 2.0 API definitions. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/swagger-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swagger to JSON Converter - Free Online Converter',
    description: 'Extract sample JSON data from Swagger 2.0 API definitions. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
