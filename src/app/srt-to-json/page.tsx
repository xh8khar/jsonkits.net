import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SRT to JSON - Convert Subtitles to JSON',
  description: 'Convert SRT subtitle files to structured JSON format with timing and text fields.',
  keywords: ['srt to json', 'subtitle converter', 'srt converter', 'srt parser'],
  alternates: { canonical: 'https://www.jsonkits.net/srt-to-json/' },
  openGraph: {
    title: 'SRT to JSON - Convert Subtitles to JSON',
    description: 'Convert SRT subtitle files to structured JSON format with timing and text fields.',
    url: 'https://www.jsonkits.net/srt-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRT to JSON - Convert Subtitles to JSON',
    description: 'Convert SRT subtitle files to structured JSON format with timing and text fields.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
