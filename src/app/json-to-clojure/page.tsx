import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Clojure Converter - Free Online Converter',
  description: 'Generate Clojure data structure syntax from JSON data samples for JVM-based functional programming.',
  keywords: ['json to clojure, json to clojure online, json to clojure tool, json to clojure, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
