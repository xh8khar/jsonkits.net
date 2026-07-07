import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Indenter - Free Online Formatter ',
  description: 'Apply custom indentation (spaces or tabs) to your JSON data. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json indenter, json indenter online, json indenter tool, json formatter, json beautifier, pretty print json, format json online, json prettier, json formatting tool, json indentation, json formatter online, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-indenter/' },
  openGraph: {
    title: 'JSON Indenter - Free Online Formatter ',
    description: 'Apply custom indentation (spaces or tabs) to your JSON data. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-indenter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Indenter - Free Online Formatter ',
    description: 'Apply custom indentation (spaces or tabs) to your JSON data. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
