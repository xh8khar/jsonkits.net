import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to MATLAB Converter - Free Online Converter',
  description: 'Convert JSON to MATLAB struct syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to matlab, json to matlab online, json to matlab tool, convert json to matlab, json matlab converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-matlab/' },
  openGraph: {
    title: 'JSON to MATLAB Converter - Free Online Converter',
    description: 'Convert JSON to MATLAB struct syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-matlab/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to MATLAB Converter - Free Online Converter',
    description: 'Convert JSON to MATLAB struct syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
