import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Image to JSON (OCR) Online — Free JSON Tool | JSONKits',
  description: 'Extract JSON-like data structures from recognized text content. 100% client-side and free to use.',
  keywords: ['image to json (ocr), convert image to json (ocr), image json (ocr) converter, json (ocr) conversion, image format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
