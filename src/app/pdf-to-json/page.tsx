import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PDF to JSON Converter - Free Online Converter',
  description: 'Extract text content from PDF data and structure it as JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['pdf to json, pdf to json online, pdf to json tool, convert pdf to json, pdf json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/pdf-to-json/' },
  openGraph: {
    title: 'PDF to JSON Converter - Free Online Converter',
    description: 'Extract text content from PDF data and structure it as JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/pdf-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to JSON Converter - Free Online Converter',
    description: 'Extract text content from PDF data and structure it as JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
