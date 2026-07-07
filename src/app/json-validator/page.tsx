import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Validator - Free Online Validator ',
  description: 'Check if your JSON is valid and get detailed error messages. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json validator, json validator online, json validator tool, validator online, validator tool, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-validator/' },
  openGraph: {
    title: 'JSON Validator - Free Online Validator ',
    description: 'Check if your JSON is valid and get detailed error messages. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Validator - Free Online Validator ',
    description: 'Check if your JSON is valid and get detailed error messages. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
