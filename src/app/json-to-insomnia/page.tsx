import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Insomnia - Free Online Tool',
  description: 'Convert JSON API request definitions to Insomnia v4 export format for API testing. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to insomnia', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
