import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SQLAlchemy Model - Free Online Tool ',
  description: 'Generate SQLAlchemy ORM model classes from JSON data samples for Python database schemas. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to sqlalchemy model', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
