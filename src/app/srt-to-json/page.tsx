import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'SRT to JSON - Convert Subtitles to JSON',
  description: 'Convert SRT subtitle files to structured JSON format with timing and text fields.',
  keywords: ['srt to json', 'subtitle converter', 'srt converter', 'srt parser'],
}

export default function Page() {
  return <ToolPageClient />
}
