import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Fake Data Generator - Free Online Generator ',
  description: 'Generate realistic fake JSON data from a template schema. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json fake data generator, json fake data generator online, json fake data generator tool, json fake generator online, json fake generator tool, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-fake-generator/' },
  openGraph: {
    title: 'JSON Fake Data Generator - Free Online Generator ',
    description: 'Generate realistic fake JSON data from a template schema. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-fake-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Fake Data Generator - Free Online Generator ',
    description: 'Generate realistic fake JSON data from a template schema. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
