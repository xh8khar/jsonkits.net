import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PHP Class - Free Online Converter ',
  description: 'Generate PHP classes with getters/setters from JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to php class, json to php class online, json to php class tool, convert json to php class, json php class converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-php-class/' },
  openGraph: {
    title: 'JSON to PHP Class - Free Online Converter ',
    description: 'Generate PHP classes with getters/setters from JSON. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-php-class/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to PHP Class - Free Online Converter ',
    description: 'Generate PHP classes with getters/setters from JSON. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
