import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Pydantic v2 - Free Online Tool ',
  description: 'Generate Pydantic v2 BaseModel classes from JSON data samples for Python data validation. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to pydantic v2', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
