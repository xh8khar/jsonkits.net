import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Resume Builder - Create JSON Resume',
  description: 'Build a standardized JSON Resume following the JSON Resume schema specification.',
  keywords: ['json resume builder', 'json resume', 'resume builder', 'json resume schema', 'resume generator'],
  alternates: { canonical: 'https://www.jsonkits.net/json-resume-builder/' },
  openGraph: {
    title: 'JSON Resume Builder - Create JSON Resume',
    description: 'Build a standardized JSON Resume following the JSON Resume schema specification.',
    url: 'https://www.jsonkits.net/json-resume-builder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Resume Builder - Create JSON Resume',
    description: 'Build a standardized JSON Resume following the JSON Resume schema specification.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
