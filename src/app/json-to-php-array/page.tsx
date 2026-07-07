import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PHP Array - Free Online Converter ',
  description: 'Convert JSON to PHP array syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to php array, json to php array online, json to php array tool, convert json to php array, json php array converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-php-array/' },
  openGraph: {
    title: 'JSON to PHP Array - Free Online Converter ',
    description: 'Convert JSON to PHP array syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-php-array/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PHP Array - Free Online Converter ',
    description: 'Convert JSON to PHP array syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
