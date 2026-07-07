import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Rails Migration - Free Online Tool',
  description: 'Generate Ruby on Rails migration files from JSON data structure samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to rails migration', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-rails-migration/' },
  openGraph: {
    title: 'JSON to Rails Migration - Free Online Tool',
    description: 'Generate Ruby on Rails migration files from JSON data structure samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-rails-migration/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Rails Migration - Free Online Tool',
    description: 'Generate Ruby on Rails migration files from JSON data structure samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
