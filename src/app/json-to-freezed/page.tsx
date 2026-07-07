import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Dart Freezed - Generate Freezed Classes',
  description: 'Generate Dart Freezed data classes with JSON serialization from JSON samples. 100% free, client-side JSON to Freezed generator.',
  keywords: ['json to freezed', 'dart freezed', 'freezed class generator', 'json to dart freezed', 'flutter freezed', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
