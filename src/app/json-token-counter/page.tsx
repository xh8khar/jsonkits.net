import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Token Counter - Count Tokens in JSON',
  description: 'Estimate the token count of your JSON data for GPT and other LLM models.',
  keywords: ['json token counter', 'token count', 'llm tokens', 'gpt tokens', 'json tokens'],
}

export default function Page() {
  return <ToolPageClient />
}
