import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Dart Freezed - Generate Freezed Classes',
  description: 'Generate Dart Freezed data classes with JSON serialization from JSON samples. 100% free, client-side JSON to Freezed generator.',
  keywords: ['json to freezed', 'dart freezed', 'freezed class generator', 'json to dart freezed', 'flutter freezed', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-freezed/' },
  openGraph: {
    title: 'JSON to Dart Freezed - Generate Freezed Classes',
    description: 'Generate Dart Freezed data classes with JSON serialization from JSON samples. 100% free, client-side JSON to Freezed generator.',
    url: 'https://www.jsonkits.net/json-to-freezed/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Dart Freezed - Generate Freezed Classes',
    description: 'Generate Dart Freezed data classes with JSON serialization from JSON samples. 100% free, client-side JSON to Freezed generator.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
