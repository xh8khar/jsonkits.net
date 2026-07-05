import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'C# Class to JSON - Free Online Generator | JSONKits',
  description: 'Generate sample JSON data from C# class definitions. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['c# class to json, c# class to json online, c# class to json tool, csharp class to json online, csharp class to json tool, csharp class to json, convert csharp class to json, csharp class json converter, json generator, generate json, json creator, json maker, random json generator, json data generator, mock json data'],
}

export default function Page() {
  return <ToolPageClient />
}
