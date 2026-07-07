import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'M3U to JSON - Convert Playlists to JSON',
  description: 'Convert M3U and M3U8 playlist files to structured JSON format with track metadata.',
  keywords: ['m3u to json', 'playlist converter', 'm3u8 converter', 'playlist to json'],
}

export default function Page() {
  return <ToolPageClient />
}
