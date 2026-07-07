import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'tsconfig.json Validator - Validate TypeScript Config',
  description: 'Validate your tsconfig.json file for recommended compiler options and proper structure.',
  keywords: ['tsconfig.json', 'typescript config', 'tsconfig validator', 'typescript validator'],
}

export default function Page() {
  return <ToolPageClient />
}
