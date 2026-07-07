import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Image to JSON (OCR) Converter - Free Online Converter',
  description: 'Extract JSON-like data structures from recognized text content. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['image to json (ocr), image to json (ocr) online, image to json (ocr) tool, image to json online, image to json tool, image to json, convert image to json, image json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
  alternates: { canonical: 'https://www.jsonkits.net/image-to-json/' },
  openGraph: {
    title: 'Image to JSON (OCR) Converter - Free Online Converter',
    description: 'Extract JSON-like data structures from recognized text content. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/image-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to JSON (OCR) Converter - Free Online Converter',
    description: 'Extract JSON-like data structures from recognized text content. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
