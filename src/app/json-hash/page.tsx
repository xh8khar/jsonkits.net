import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Hash Generator - Free Online Validator ',
  description: 'Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-512) of your JSON data for integrity verification. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json hash generator, json hash generator online, json hash generator tool, json hash online, json hash tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
