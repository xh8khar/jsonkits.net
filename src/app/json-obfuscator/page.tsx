import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Obfuscator - Free Online Tool',
  description: 'Obfuscate JSON field names and string values to protect sensitive data while preserving structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json obfuscator', 'json tool', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
