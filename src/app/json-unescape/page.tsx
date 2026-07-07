import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Unescape - Free Online Converter ',
  description: 'Unescape a previously escaped JSON string. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json unescape, json unescape online, json unescape tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-unescape/' },
  openGraph: {
    title: 'JSON Unescape - Free Online Converter ',
    description: 'Unescape a previously escaped JSON string. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-unescape/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Unescape - Free Online Converter ',
    description: 'Unescape a previously escaped JSON string. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
