import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SRT - Convert JSON to Subtitles',
  description: 'Convert structured JSON subtitle data back to SRT subtitle file format.',
  keywords: ['json to srt', 'subtitle generator', 'srt generator'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-srt/' },
  openGraph: {
    title: 'JSON to SRT - Convert JSON to Subtitles',
    description: 'Convert structured JSON subtitle data back to SRT subtitle file format.',
    url: 'https://www.jsonkits.net/json-to-srt/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to SRT - Convert JSON to Subtitles',
    description: 'Convert structured JSON subtitle data back to SRT subtitle file format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
