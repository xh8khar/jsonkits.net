import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Patch Validator - Free Online Validator ',
  description: 'Validate RFC 6902 JSON Patch operation lists for correctness. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json patch validator, json patch validator online, json patch validator tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-patch-validator/' },
  openGraph: {
    title: 'JSON Patch Validator - Free Online Validator ',
    description: 'Validate RFC 6902 JSON Patch operation lists for correctness. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-patch-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Patch Validator - Free Online Validator ',
    description: 'Validate RFC 6902 JSON Patch operation lists for correctness. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
