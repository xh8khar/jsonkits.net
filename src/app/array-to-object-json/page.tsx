import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Array JSON to Object JSON - Free Online Converter ',
  description: 'Transpose an array of objects into an object of arrays. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['array json to object json, array json to object json online, array json to object json tool, array to object json online, array to object json tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/array-to-object-json/' },
  openGraph: {
    title: 'Array JSON to Object JSON - Free Online Converter ',
    description: 'Transpose an array of objects into an object of arrays. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/array-to-object-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Array JSON to Object JSON - Free Online Converter ',
    description: 'Transpose an array of objects into an object of arrays. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
