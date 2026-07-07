import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to ANSI Colorized - Free Online Converter ',
  description: 'Render JSON data with ANSI color codes for syntax-highlighted terminal output.',
  keywords: ['json to ansi colorized, json to ansi colorized online, json to ansi colorized tool, json to ansi, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-ansi/' },
  openGraph: {
    title: 'JSON to ANSI Colorized - Free Online Converter ',
    description: 'Render JSON data with ANSI color codes for syntax-highlighted terminal output.',
    url: 'https://www.jsonkits.net/json-to-ansi/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to ANSI Colorized - Free Online Converter ',
    description: 'Render JSON data with ANSI color codes for syntax-highlighted terminal output.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
