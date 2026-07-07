import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SRT - Convert JSON to Subtitles',
  description: 'Convert structured JSON subtitle data back to SRT subtitle file format.',
  keywords: ['json to srt', 'subtitle generator', 'srt generator'],
}

export default function Page() {
  return <ToolPageClient />
}
