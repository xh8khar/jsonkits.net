import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'composer.json Validator - Validate PHP Composer Files',
  description: 'Validate your composer.json file for required fields and proper PHP package structure.',
  keywords: ['composer.json', 'php composer', 'composer validator', 'php package validator'],
  alternates: { canonical: 'https://www.jsonkits.net/composer-json-validator/' },
  openGraph: {
    title: 'composer.json Validator - Validate PHP Composer Files',
    description: 'Validate your composer.json file for required fields and proper PHP package structure.',
    url: 'https://www.jsonkits.net/composer-json-validator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'composer.json Validator - Validate PHP Composer Files',
    description: 'Validate your composer.json file for required fields and proper PHP package structure.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
