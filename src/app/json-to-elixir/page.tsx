import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Elixir Converter - Free Online Converter',
  description: 'Generate Elixir struct definitions with JSON encoding support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to elixir, json to elixir online, json to elixir tool, convert json to elixir, json elixir converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
