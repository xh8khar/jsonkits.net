import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Array to JSON Object - Free Online Converter ',
  description: 'Convert arrays of key-value pairs back to JSON objects. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['array to json object, array to json object online, array to json object tool, array to json online, array to json tool, array to json, convert array to json, array json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/array-to-json/' },
  openGraph: {
    title: 'Array to JSON Object - Free Online Converter ',
    description: 'Convert arrays of key-value pairs back to JSON objects. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/array-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Array to JSON Object - Free Online Converter ',
    description: 'Convert arrays of key-value pairs back to JSON objects. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
