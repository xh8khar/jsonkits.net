import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: '.env to JSON Converter - Free Online Converter',
  description: 'Parse .env files back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['.env to json, .env to json online, .env to json tool, env to json online, env to json tool, env to json, convert env to json, env json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/env-to-json/' },
  openGraph: {
    title: '.env to JSON Converter - Free Online Converter',
    description: 'Parse .env files back into JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/env-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '.env to JSON Converter - Free Online Converter',
    description: 'Parse .env files back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
