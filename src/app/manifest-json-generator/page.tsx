import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'manifest.json Generator - PWA Manifest Generator',
  description: 'Generate a complete PWA Web App Manifest (manifest.json) with icons, theme colors, and display settings.',
  keywords: ['manifest.json', 'pwa manifest', 'web app manifest', 'pwa generator', 'manifest generator'],
}

export default function Page() {
  return <ToolPageClient />
}
