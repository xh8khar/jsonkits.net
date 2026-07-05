import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TypeScript Interface to JSON - Free Online Generator | JSONKits',
  description: 'Generate sample JSON data from TypeScript interface definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['typescript interface to json, typescript interface to json online, typescript interface to json tool, convert typescript interface to json, typescript interface json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
