import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWT Decoder - Free Online Validator | JSONKits',
  description: 'Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jwt decoder, jwt decoder online, jwt decoder tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
