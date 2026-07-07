import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Spring Entity - Free Online Tool',
  description: 'Generate Spring Boot JPA entity classes with Jakarta annotations from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to spring entity', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
