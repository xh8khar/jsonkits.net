import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Validate Uploaded JSON - Free Online Validator ',
  description: 'Validate JSON data from file uploads with detailed feedback. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['validate uploaded json, validate uploaded json online, validate uploaded json tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/validate-uploaded-json/' },
  openGraph: {
    title: 'Validate Uploaded JSON - Free Online Validator ',
    description: 'Validate JSON data from file uploads with detailed feedback. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/validate-uploaded-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Validate Uploaded JSON - Free Online Validator ',
    description: 'Validate JSON data from file uploads with detailed feedback. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
