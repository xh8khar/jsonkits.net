import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: '.env to JSON Online — Free JSON Tool | JSONKits',
  description: 'Parse .env files back into JSON format. 100% client-side and free to use.',
  keywords: ['.env to json, convert .env to json, .env json converter, json converter, .env format, .env parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
