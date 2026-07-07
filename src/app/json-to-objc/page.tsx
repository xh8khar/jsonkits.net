import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Objective-C Converter - Free Online Converter',
  description: 'Generate Objective-C class interfaces with properties from JSON data samples for iOS and macOS development.',
  keywords: ['json to objective-c, json to objective-c online, json to objective-c tool, json to objc, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-objc/' },
  openGraph: {
    title: 'JSON to Objective-C Converter - Free Online Converter',
    description: 'Generate Objective-C class interfaces with properties from JSON data samples for iOS and macOS development.',
    url: 'https://www.jsonkits.net/json-to-objc/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Objective-C Converter - Free Online Converter',
    description: 'Generate Objective-C class interfaces with properties from JSON data samples for iOS and macOS development.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
