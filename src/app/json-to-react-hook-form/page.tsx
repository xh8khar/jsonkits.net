import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to React Hook Form - Free Online Converter',
  description: 'Generate React Hook Form code from JSON data samples. 100% free, client-side form generator with no server uploads.',
  keywords: ['json to react hook form, json to react-hook-form, react hook form generator, form schema from json, react form generator, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-react-hook-form/' },
  openGraph: {
    title: 'JSON to React Hook Form - Free Online Converter',
    description: 'Generate React Hook Form code from JSON data samples. 100% free, client-side form generator with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-react-hook-form/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to React Hook Form - Free Online Converter',
    description: 'Generate React Hook Form code from JSON data samples. 100% free, client-side form generator with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
