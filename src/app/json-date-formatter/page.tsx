import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Date Formatter - Free Online Formatter ',
  description: 'Convert date strings in JSON between ISO, locale, Unix, and UTC formats. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json date formatter, json date formatter online, json date formatter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
