import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Decrypt - Free Online Converter ',
  description: 'Decrypt previously encrypted JSON data back to readable format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json decrypt, json decrypt online, json decrypt tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-decrypt/' },
  openGraph: {
    title: 'JSON Decrypt - Free Online Converter ',
    description: 'Decrypt previously encrypted JSON data back to readable format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-decrypt/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Decrypt - Free Online Converter ',
    description: 'Decrypt previously encrypted JSON data back to readable format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
