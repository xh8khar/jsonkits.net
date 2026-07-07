import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Oracle to JSON Converter - Free Online Converter',
  description: 'Parse Oracle SQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['oracle to json, oracle to json online, oracle to json tool, convert oracle to json, oracle json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/oracle-to-json/' },
  openGraph: {
    title: 'Oracle to JSON Converter - Free Online Converter',
    description: 'Parse Oracle SQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/oracle-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oracle to JSON Converter - Free Online Converter',
    description: 'Parse Oracle SQL INSERT statements back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
