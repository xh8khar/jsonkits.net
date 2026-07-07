import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'composer.json Validator - Validate PHP Composer Files',
  description: 'Validate your composer.json file for required fields and proper PHP package structure.',
  keywords: ['composer.json', 'php composer', 'composer validator', 'php package validator'],
}

export default function Page() {
  return <ToolPageClient />
}
