import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Path Notation Converter - Free Online Tool ',
  description: 'Convert between JSONPath, JSON Pointer, and JMESPath query notations. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json path notation converter, jsonpath to json pointer, json pointer to jsonpath, jmespath converter, json path notation, json query notation converter, json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
