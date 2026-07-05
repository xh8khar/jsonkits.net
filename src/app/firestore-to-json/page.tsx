import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Firestore to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert Firestore document format back to standard JSON. 100% client-side and free to use.',
  keywords: ['firestore to json, convert firestore to json, firestore json converter, json converter, firestore format, firestore parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
