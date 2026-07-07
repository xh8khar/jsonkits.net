import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Upload - Free Online Formatter ',
  description: 'Upload a .json file and view or process its contents instantly. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json upload, json upload online, json upload tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-upload/' },
  openGraph: {
    title: 'JSON Upload - Free Online Formatter ',
    description: 'Upload a .json file and view or process its contents instantly. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-upload/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Upload - Free Online Formatter ',
    description: 'Upload a .json file and view or process its contents instantly. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
