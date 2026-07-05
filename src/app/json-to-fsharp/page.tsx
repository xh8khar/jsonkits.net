import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to F# - Free Online Converter ',
  description: 'Generate F# record type definitions with JSON serialization support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to f#, json to f# online, json to f# tool, json to fsharp online, json to fsharp tool, json to fsharp, convert json to fsharp, json fsharp converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
