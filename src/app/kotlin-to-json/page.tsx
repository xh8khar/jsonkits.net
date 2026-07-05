import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Kotlin to JSON - Free Online Generator ',
  description: 'Generate sample JSON data from Kotlin data class definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['kotlin to json, kotlin to json online, kotlin to json tool, convert kotlin to json, kotlin json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
