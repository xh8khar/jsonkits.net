import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Dart to JSON - Free Online Generator | JSONKits',
  description: 'Generate sample JSON data from Dart model class definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['dart to json, dart to json online, dart to json tool, convert dart to json, dart json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
