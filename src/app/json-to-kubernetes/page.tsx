import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Kubernetes Converter - Free Online Converter',
  description: 'Convert JSON data to Kubernetes manifest YAML. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to kubernetes, json to kubernetes online, json to kubernetes tool, convert json to kubernetes, json kubernetes converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-kubernetes/' },
  openGraph: {
    title: 'JSON to Kubernetes Converter - Free Online Converter',
    description: 'Convert JSON data to Kubernetes manifest YAML. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-kubernetes/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Kubernetes Converter - Free Online Converter',
    description: 'Convert JSON data to Kubernetes manifest YAML. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
