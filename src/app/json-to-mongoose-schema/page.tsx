import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Mongoose Schema - Free Online Tool ',
  description: 'Generate Mongoose ODM schemas from JSON data samples for MongoDB/Node.js applications. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to mongoose schema', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
