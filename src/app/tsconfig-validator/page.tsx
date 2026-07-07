import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'tsconfig.json Validator - Validate TypeScript Config',
  description: 'Validate your tsconfig.json file for recommended compiler options and proper structure.',
  keywords: ['tsconfig.json', 'typescript config', 'tsconfig validator', 'typescript validator'],
  alternates: { canonical: 'https://www.jsonkits.net/tsconfig-validator/' },
  openGraph: {
    title: 'tsconfig.json Validator - Validate TypeScript Config',
    description: 'Validate your tsconfig.json file for recommended compiler options and proper structure.',
    url: 'https://www.jsonkits.net/tsconfig-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tsconfig.json Validator - Validate TypeScript Config',
    description: 'Validate your tsconfig.json file for recommended compiler options and proper structure.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
