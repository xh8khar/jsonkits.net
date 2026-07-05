import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Swift to JSON - Free Online Generator | JSONKits',
  description: 'Generate sample JSON data from Swift struct definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['swift to json, swift to json online, swift to json tool, convert swift to json, swift json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
