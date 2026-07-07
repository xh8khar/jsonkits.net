import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Lottie JSON Viewer - View Lottie Animation Metadata',
  description: 'View and analyze Lottie animation JSON files with frame rate, dimensions, and layer information.',
  keywords: ['lottie json', 'lottie viewer', 'lottie animation', 'lottie analyzer'],
  alternates: { canonical: 'https://www.jsonkits.net/lottie-json-viewer/' },
  openGraph: {
    title: 'Lottie JSON Viewer - View Lottie Animation Metadata',
    description: 'View and analyze Lottie animation JSON files with frame rate, dimensions, and layer information.',
    url: 'https://www.jsonkits.net/lottie-json-viewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lottie JSON Viewer - View Lottie Animation Metadata',
    description: 'View and analyze Lottie animation JSON files with frame rate, dimensions, and layer information.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
