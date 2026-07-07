import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Go Struct to JSON Generator - Free Online Generator',
  description: 'Generate sample JSON data from Go struct definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['go struct to json, go struct to json online, go struct to json tool, convert go struct to json, go struct json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/go-struct-to-json/' },
  openGraph: {
    title: 'Go Struct to JSON Generator - Free Online Generator',
    description: 'Generate sample JSON data from Go struct definitions. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/go-struct-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Struct to JSON Generator - Free Online Generator',
    description: 'Generate sample JSON data from Go struct definitions. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
