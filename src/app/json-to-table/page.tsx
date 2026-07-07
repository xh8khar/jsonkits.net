import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to HTML Table Converter',
  description: 'Convert JSON data to an HTML table for embedding in web pages. 100% free, client-side JSON to HTML table converter.',
  keywords: ['json to html table', 'json to table', 'html table generator', 'json to html converter', 'table from json', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
