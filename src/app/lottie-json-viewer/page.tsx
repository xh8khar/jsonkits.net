import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Lottie JSON Viewer - View Lottie Animation Metadata',
  description: 'View and analyze Lottie animation JSON files with frame rate, dimensions, and layer information.',
  keywords: ['lottie json', 'lottie viewer', 'lottie animation', 'lottie analyzer'],
}

export default function Page() {
  return <ToolPageClient />
}
