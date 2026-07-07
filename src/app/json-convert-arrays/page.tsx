import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Convert to Object - Free Online Converter ',
  description: 'Transpose array of objects into object of arrays. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json convert to object, json convert to object online, json convert to object tool, json convert arrays online, json convert arrays tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-convert-arrays/' },
  openGraph: {
    title: 'JSON Convert to Object - Free Online Converter ',
    description: 'Transpose array of objects into object of arrays. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-convert-arrays/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Convert to Object - Free Online Converter ',
    description: 'Transpose array of objects into object of arrays. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
