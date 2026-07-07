import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Postman to JSON Converter - Free Online Converter',
  description: 'Extract request definitions from Postman Collection JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['postman to json, postman to json online, postman to json tool, convert postman to json, postman json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/postman-to-json/' },
  openGraph: {
    title: 'Postman to JSON Converter - Free Online Converter',
    description: 'Extract request definitions from Postman Collection JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/postman-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Postman to JSON Converter - Free Online Converter',
    description: 'Extract request definitions from Postman Collection JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
