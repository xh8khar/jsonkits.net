import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to .env - Free Online Converter ',
  description: 'Convert JSON objects to .env file format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to .env, json to .env online, json to .env tool, json to env online, json to env tool, json to env, convert json to env, json env converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-env/' },
  openGraph: {
    title: 'JSON to .env - Free Online Converter ',
    description: 'Convert JSON objects to .env file format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-env/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to .env - Free Online Converter ',
    description: 'Convert JSON objects to .env file format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
