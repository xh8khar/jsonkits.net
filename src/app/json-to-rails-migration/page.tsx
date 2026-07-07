import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Rails Migration - Free Online Tool',
  description: 'Generate Ruby on Rails migration files from JSON data structure samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to rails migration', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
