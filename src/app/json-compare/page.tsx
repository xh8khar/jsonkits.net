import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Compare Online — Free JSON Tool | JSONKits',
  description: 'Compare two JSON objects to find added, removed, and changed fields. 100% client-side and free to use.',
  keywords: ['json diff, compare json, json compare tool, json difference, json merge, json comparison online, diff json, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
