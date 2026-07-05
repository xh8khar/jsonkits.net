import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to SVG Image Online — Free JSON Tool | JSONKits',
  description: 'Render JSON data as a syntax-highlighted SVG image. 100% client-side and free to use.',
  keywords: ['json to svg image, convert json to svg image, json svg image converter, svg image format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
