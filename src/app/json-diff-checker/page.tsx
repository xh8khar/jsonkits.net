import type { Metadata } from 'next'
import DiffToolClient from './DiffToolClient'

export const metadata: Metadata = {
  title: 'JSON Diff Checker — Free Online Tool | JSONKits',
  description: 'Compare two JSON objects and find differences instantly. Free browser-based JSON diff checker with side-by-side comparison and detailed change reports.',
}

export default function Page() {
  return <DiffToolClient />
}
