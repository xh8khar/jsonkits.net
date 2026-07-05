import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Fortran - Free Online Converter | JSONKits',
  description: 'Generate Fortran derived type definitions from JSON data samples for scientific computing.',
  keywords: ['json to fortran, json to fortran online, json to fortran tool, json to fortran, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
