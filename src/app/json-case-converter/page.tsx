import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Case Converter - Free Online Formatter ',
  description: 'Convert JSON key casing between camelCase, snake_case, kebab-case, PascalCase. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json case converter, json case converter online, json case converter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-case-converter/' },
  openGraph: {
    title: 'JSON Case Converter - Free Online Formatter ',
    description: 'Convert JSON key casing between camelCase, snake_case, kebab-case, PascalCase. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-case-converter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Case Converter - Free Online Formatter ',
    description: 'Convert JSON key casing between camelCase, snake_case, kebab-case, PascalCase. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
