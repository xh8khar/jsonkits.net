import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to C# Online — Free JSON Tool | JSONKits',
  description: 'Generate C# classes with JSON attributes from JSON samples. 100% client-side and free to use.',
  keywords: ['json to c#, convert json to c#, json c# converter, c# format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
