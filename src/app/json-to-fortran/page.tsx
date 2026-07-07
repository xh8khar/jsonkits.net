import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Fortran Converter - Free Online Converter',
  description: 'Generate Fortran derived type definitions from JSON data samples for scientific computing.',
  keywords: ['json to fortran, json to fortran online, json to fortran tool, json to fortran, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-fortran/' },
  openGraph: {
    title: 'JSON to Fortran Converter - Free Online Converter',
    description: 'Generate Fortran derived type definitions from JSON data samples for scientific computing.',
    url: 'https://www.jsonkits.net/json-to-fortran/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Fortran Converter - Free Online Converter',
    description: 'Generate Fortran derived type definitions from JSON data samples for scientific computing.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
