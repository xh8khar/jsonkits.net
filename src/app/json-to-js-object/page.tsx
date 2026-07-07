import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to JS Object - Free Online Converter ',
  description: 'Convert JSON to JavaScript object literal syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to js object, json to js object online, json to js object tool, convert json to js object, json js object converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-js-object/' },
  openGraph: {
    title: 'JSON to JS Object - Free Online Converter ',
    description: 'Convert JSON to JavaScript object literal syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-js-object/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to JS Object - Free Online Converter ',
    description: 'Convert JSON to JavaScript object literal syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
