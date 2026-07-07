import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Clojure Converter - Free Online Converter',
  description: 'Generate Clojure data structure syntax from JSON data samples for JVM-based functional programming.',
  keywords: ['json to clojure, json to clojure online, json to clojure tool, json to clojure, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-clojure/' },
  openGraph: {
    title: 'JSON to Clojure Converter - Free Online Converter',
    description: 'Generate Clojure data structure syntax from JSON data samples for JVM-based functional programming.',
    url: 'https://www.jsonkits.net/json-to-clojure/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Clojure Converter - Free Online Converter',
    description: 'Generate Clojure data structure syntax from JSON data samples for JVM-based functional programming.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
