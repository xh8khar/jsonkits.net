import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Java Class to JSON - Free Online Generator ',
  description: 'Generate sample JSON data from Java class definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['java class to json, java class to json online, java class to json tool, convert java class to json, java class json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
