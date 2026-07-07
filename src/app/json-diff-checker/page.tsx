import type { Metadata } from 'next'
import DiffToolClient from './DiffToolClient'

export const metadata: Metadata = {
  title: 'JSON Diff Checker - Free Online Comparison Tool ',
  description: 'Compare two JSON objects and see the differences. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json diff checker, json diff checker online, json diff checker tool, diff checker online, diff checker tool, json compare, json diff, json comparison, diff json, compare json online, json difference checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-diff-checker/' },
  openGraph: {
    title: 'JSON Diff Checker - Free Online Comparison Tool ',
    description: 'Compare two JSON objects and see the differences. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-diff-checker/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Diff Checker - Free Online Comparison Tool ',
    description: 'Compare two JSON objects and see the differences. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <DiffToolClient />
}
