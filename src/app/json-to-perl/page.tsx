import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Perl Converter - Free Online Converter',
  description: 'Convert JSON to Perl data structure syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to perl, json to perl online, json to perl tool, convert json to perl, json perl converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-perl/' },
  openGraph: {
    title: 'JSON to Perl Converter - Free Online Converter',
    description: 'Convert JSON to Perl data structure syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-perl/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Perl Converter - Free Online Converter',
    description: 'Convert JSON to Perl data structure syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
