import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Python Dict to JSON - Free Online Generator | JSONKits',
  description: 'Convert Python dictionary syntax to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['python dict to json, python dict to json online, python dict to json tool, convert python dict to json, python dict json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
