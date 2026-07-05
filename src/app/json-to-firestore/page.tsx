import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Firestore Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to Firestore document format with typed fields. 100% client-side and free to use.',
  keywords: ['json to firestore, convert json to firestore, json firestore converter, firestore format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
