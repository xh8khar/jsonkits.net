import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Stringify - Format JSON Data',
  description: 'Beautify and stringify JSON data with proper indentation for readability. 100% free, client-side JSON stringify tool.',
  keywords: ['json stringify', 'json stringify online', 'json format', 'json beautifier', 'json prettify', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
