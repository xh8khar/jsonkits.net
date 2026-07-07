import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Resume Builder - Create JSON Resume',
  description: 'Build a standardized JSON Resume following the JSON Resume schema specification.',
  keywords: ['json resume builder', 'json resume', 'resume builder', 'json resume schema', 'resume generator'],
}

export default function Page() {
  return <ToolPageClient />
}
