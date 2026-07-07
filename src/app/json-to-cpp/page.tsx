import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to C++ Converter - Free Online Converter',
  description: 'Generate C++ class definitions with JSON serialization support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to c++, json to c++ online, json to c++ tool, json to cpp online, json to cpp tool, json to cpp, convert json to cpp, json cpp converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-cpp/' },
  openGraph: {
    title: 'JSON to C++ Converter - Free Online Converter',
    description: 'Generate C++ class definitions with JSON serialization support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-cpp/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to C++ Converter - Free Online Converter',
    description: 'Generate C++ class definitions with JSON serialization support from JSON data samples. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
