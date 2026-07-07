import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Convert JSON File - Free Online Converter ',
  description: 'Process and analyze JSON file contents with size and type info. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['convert json file, convert json file online, convert json file tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/convert-json-file/' },
  openGraph: {
    title: 'Convert JSON File - Free Online Converter ',
    description: 'Process and analyze JSON file contents with size and type info. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/convert-json-file/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert JSON File - Free Online Converter ',
    description: 'Process and analyze JSON file contents with size and type info. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
