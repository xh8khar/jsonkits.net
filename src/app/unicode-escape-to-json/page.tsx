import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Unicode Escape to JSON - Free Online Converter ',
  description: 'Convert Unicode escape sequences to readable JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['unicode escape to json, unicode escape to json online, unicode escape to json tool, convert unicode escape to json, unicode escape json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/unicode-escape-to-json/' },
  openGraph: {
    title: 'Unicode Escape to JSON - Free Online Converter ',
    description: 'Convert Unicode escape sequences to readable JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/unicode-escape-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unicode Escape to JSON - Free Online Converter ',
    description: 'Convert Unicode escape sequences to readable JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
