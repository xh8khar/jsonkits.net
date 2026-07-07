import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'URL Parameters to JSON Converter - Free Online Converter',
  description: 'Convert URL parameters back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['url parameters to json, url parameters to json online, url parameters to json tool, url params to json online, url params to json tool, url params to json, convert url params to json, url params json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/url-params-to-json/' },
  openGraph: {
    title: 'URL Parameters to JSON Converter - Free Online Converter',
    description: 'Convert URL parameters back to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/url-params-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Parameters to JSON Converter - Free Online Converter',
    description: 'Convert URL parameters back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
