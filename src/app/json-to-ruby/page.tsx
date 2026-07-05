import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Ruby - Free Online Converter ',
  description: 'Convert JSON to Ruby hash syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to ruby, json to ruby online, json to ruby tool, convert json to ruby, json ruby converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
