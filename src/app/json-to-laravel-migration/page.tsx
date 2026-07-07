import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Laravel Migration - PHP Migration Generator',
  description: 'Generate Laravel PHP migration files from JSON data structure samples.',
  keywords: ['json to laravel migration', 'json to laravel', 'laravel migration generator', 'php migration', 'laravel schema'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-laravel-migration/' },
  openGraph: {
    title: 'JSON to Laravel Migration - PHP Migration Generator',
    description: 'Generate Laravel PHP migration files from JSON data structure samples.',
    url: 'https://www.jsonkits.net/json-to-laravel-migration/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Laravel Migration - PHP Migration Generator',
    description: 'Generate Laravel PHP migration files from JSON data structure samples.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
