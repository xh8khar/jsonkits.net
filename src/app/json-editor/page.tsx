import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Editor - Edit and Modify JSON Online',
  description: 'Edit, modify, and format JSON data with syntax highlighting. 100% free, client-side JSON editor tool with no server uploads.',
  keywords: ['json editor', 'json editor online', 'edit json online', 'json editor tool', 'json formatter', 'json modifier', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-editor/' },
  openGraph: {
    title: 'JSON Editor - Edit and Modify JSON Online',
    description: 'Edit, modify, and format JSON data with syntax highlighting. 100% free, client-side JSON editor tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-editor/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Editor - Edit and Modify JSON Online',
    description: 'Edit, modify, and format JSON data with syntax highlighting. 100% free, client-side JSON editor tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
