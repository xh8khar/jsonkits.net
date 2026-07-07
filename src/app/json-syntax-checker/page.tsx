import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Syntax Checker - Free Online Validator ',
  description: 'Check JSON syntax and get detailed error messages for invalid input. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json syntax checker, json syntax checker online, json syntax checker tool, json validator, validate json, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-syntax-checker/' },
  openGraph: {
    title: 'JSON Syntax Checker - Free Online Validator ',
    description: 'Check JSON syntax and get detailed error messages for invalid input. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-syntax-checker/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Syntax Checker - Free Online Validator ',
    description: 'Check JSON syntax and get detailed error messages for invalid input. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
