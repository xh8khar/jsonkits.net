import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to C# Converter - Free Online Converter',
  description: 'Generate C# classes with JSON attributes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to c#, json to c# online, json to c# tool, json to csharp online, json to csharp tool, json to csharp, convert json to csharp, json csharp converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
