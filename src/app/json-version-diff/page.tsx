import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Version Diff - Free Online Comparison Tool ',
  description: 'Compare two versions of JSON data side by side with change tracking. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json version diff, json version diff online, json version diff tool, json compare, json diff, json comparison, diff json, compare json online, json difference checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
