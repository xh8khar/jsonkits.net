import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Upload - Free Online Formatter | JSONKits',
  description: 'Upload a .json file and view or process its contents instantly. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json upload, json upload online, json upload tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
