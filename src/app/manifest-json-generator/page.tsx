import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'manifest.json Generator - PWA Manifest Generator',
  description: 'Generate a complete PWA Web App Manifest (manifest.json) with icons, theme colors, and display settings.',
  keywords: ['manifest.json', 'pwa manifest', 'web app manifest', 'pwa generator', 'manifest generator'],
  alternates: { canonical: 'https://www.jsonkits.net/manifest-json-generator/' },
  openGraph: {
    title: 'manifest.json Generator - PWA Manifest Generator',
    description: 'Generate a complete PWA Web App Manifest (manifest.json) with icons, theme colors, and display settings.',
    url: 'https://www.jsonkits.net/manifest-json-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'manifest.json Generator - PWA Manifest Generator',
    description: 'Generate a complete PWA Web App Manifest (manifest.json) with icons, theme colors, and display settings.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
