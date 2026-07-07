import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'package.json Validator - Validate NPM Package Files',
  description: 'Validate your package.json file for required fields, correct semver versioning, and proper structure.',
  keywords: ['package.json validator', 'npm validate', 'package json', 'npm package', 'semver'],
  alternates: { canonical: 'https://www.jsonkits.net/package-json-validator/' },
  openGraph: {
    title: 'package.json Validator - Validate NPM Package Files',
    description: 'Validate your package.json file for required fields, correct semver versioning, and proper structure.',
    url: 'https://www.jsonkits.net/package-json-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'package.json Validator - Validate NPM Package Files',
    description: 'Validate your package.json file for required fields, correct semver versioning, and proper structure.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
