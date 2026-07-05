import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Firestore to JSON - Free Online Converter | JSONKits',
  description: 'Convert Firestore document format back to standard JSON. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['firestore to json, firestore to json online, firestore to json tool, convert firestore to json, firestore json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
