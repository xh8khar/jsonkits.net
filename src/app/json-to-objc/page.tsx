import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Objective-C - Free Online Converter | JSONKits',
  description: 'Generate Objective-C class interfaces with properties from JSON data samples for iOS and macOS development.',
  keywords: ['json to objective-c, json to objective-c online, json to objective-c tool, json to objc, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
