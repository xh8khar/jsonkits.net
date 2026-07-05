import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWT Validator - Free Online Validator | JSONKits',
  description: 'Validate JSON Web Tokens (JWT) by verifying signature, expiration (exp), and other standard claims. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jwt validator, jwt validator online, jwt validator tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
