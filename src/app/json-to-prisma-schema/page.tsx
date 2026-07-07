import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Prisma Schema - Free Online Tool ',
  description: 'Generate Prisma ORM models from JSON data samples for Node.js/TypeScript database schemas. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to prisma schema', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-prisma-schema/' },
  openGraph: {
    title: 'JSON to Prisma Schema - Free Online Tool ',
    description: 'Generate Prisma ORM models from JSON data samples for Node.js/TypeScript database schemas. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-prisma-schema/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Prisma Schema - Free Online Tool ',
    description: 'Generate Prisma ORM models from JSON data samples for Node.js/TypeScript database schemas. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
