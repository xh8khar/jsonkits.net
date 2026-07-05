import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Syntax Checker - Free Online Validator ',
  description: 'Check JSON syntax and get detailed error messages for invalid input. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json syntax checker, json syntax checker online, json syntax checker tool, json validator, validate json, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
