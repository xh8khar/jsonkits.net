import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to M3U - Convert JSON to Playlist',
  description: 'Convert structured JSON playlist data to M3U playlist file format.',
  keywords: ['json to m3u', 'json to playlist', 'm3u generator', 'playlist generator'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-m3u/' },
  openGraph: {
    title: 'JSON to M3U - Convert JSON to Playlist',
    description: 'Convert structured JSON playlist data to M3U playlist file format.',
    url: 'https://www.jsonkits.net/json-to-m3u/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to M3U - Convert JSON to Playlist',
    description: 'Convert structured JSON playlist data to M3U playlist file format.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
