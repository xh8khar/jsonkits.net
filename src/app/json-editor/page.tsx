import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Editor - Edit and Modify JSON Online',
  description: 'Edit, modify, and format JSON data with syntax highlighting. 100% free, client-side JSON editor tool with no server uploads.',
  keywords: ['json editor', 'json editor online', 'edit json online', 'json editor tool', 'json formatter', 'json modifier', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
