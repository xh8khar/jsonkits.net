import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compare - Free Online Comparison Tool | JSONKits',
  description: 'Compare two JSON objects to find added, removed, and changed fields. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json compare, json compare online, json compare tool, json diff, json comparison, diff json, compare json online, json difference checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
