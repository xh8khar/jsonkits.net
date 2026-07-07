import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Invalid JSON Repair - Free Online Validator ',
  description: 'Repair malformed JSON by detecting and fixing common syntax issues. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['invalid json repair, invalid json repair online, invalid json repair tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/invalid-json-repair/' },
  openGraph: {
    title: 'Invalid JSON Repair - Free Online Validator ',
    description: 'Repair malformed JSON by detecting and fixing common syntax issues. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/invalid-json-repair/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invalid JSON Repair - Free Online Validator ',
    description: 'Repair malformed JSON by detecting and fixing common syntax issues. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
