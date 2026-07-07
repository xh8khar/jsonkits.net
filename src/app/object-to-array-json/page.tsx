import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Object JSON to Array JSON - Free Online Converter ',
  description: 'Transpose an object of arrays back into an array of objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['object json to array json, object json to array json online, object json to array json tool, object to array json online, object to array json tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/object-to-array-json/' },
  openGraph: {
    title: 'Object JSON to Array JSON - Free Online Converter ',
    description: 'Transpose an object of arrays back into an array of objects. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/object-to-array-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Object JSON to Array JSON - Free Online Converter ',
    description: 'Transpose an object of arrays back into an array of objects. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
