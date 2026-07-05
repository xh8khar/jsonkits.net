import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Mock Generator - Free Online Generator ',
  description: 'Generate mock API response data from a type template. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json mock generator, json mock generator online, json mock generator tool, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
