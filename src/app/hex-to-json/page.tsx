import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Hex to JSON Converter - Free Online Converter',
  description: 'Convert hexadecimal strings back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['hex to json, hex to json online, hex to json tool, convert hex to json, hex json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/hex-to-json/' },
  openGraph: {
    title: 'Hex to JSON Converter - Free Online Converter',
    description: 'Convert hexadecimal strings back to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/hex-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hex to JSON Converter - Free Online Converter',
    description: 'Convert hexadecimal strings back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
