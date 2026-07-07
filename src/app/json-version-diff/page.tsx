import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Version Diff - Free Online Comparison Tool ',
  description: 'Compare two versions of JSON data side by side with change tracking. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json version diff, json version diff online, json version diff tool, json compare, json diff, json comparison, diff json, compare json online, json difference checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-version-diff/' },
  openGraph: {
    title: 'JSON Version Diff - Free Online Comparison Tool ',
    description: 'Compare two versions of JSON data side by side with change tracking. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-version-diff/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Version Diff - Free Online Comparison Tool ',
    description: 'Compare two versions of JSON data side by side with change tracking. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
