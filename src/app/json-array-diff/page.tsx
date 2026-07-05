import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Array Diff - Free Online Comparison Tool ',
  description: 'Compare two JSON arrays to find added, removed, and unchanged items. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json array diff, json array diff online, json array diff tool, json compare, json diff, json comparison, diff json, compare json online, json difference checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
