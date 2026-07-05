import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Number Converter - Free Online Formatter ',
  description: 'Convert numbers in JSON between decimal, hexadecimal, octal, binary, and scientific notation formats. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json number converter, json number converter online, json number converter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
