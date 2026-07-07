import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'ARB to JSON - Flutter ARB Converter',
  description: 'Convert Flutter ARB (Application Resource Bundle) files to clean JSON.',
  keywords: ['arb to json', 'flutter arb', 'arb converter', 'flutter localization', 'app resource bundle'],
}

export default function Page() {
  return <ToolPageClient />
}
