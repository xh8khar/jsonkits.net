import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compress (Deflate) - Free Online Formatter ',
  description: 'Compress JSON data using Deflate algorithm and output Base64. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json compress (deflate), json compress (deflate) online, json compress (deflate) tool, json compress online, json compress tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-compress/' },
  openGraph: {
    title: 'JSON Compress (Deflate) - Free Online Formatter ',
    description: 'Compress JSON data using Deflate algorithm and output Base64. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-compress/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Compress (Deflate) - Free Online Formatter ',
    description: 'Compress JSON data using Deflate algorithm and output Base64. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
