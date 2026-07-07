import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PList Converter',
  description: 'Convert standard JSON to Apple Property List (PList) XML format. 100% free, client-side JSON to PList converter tool.',
  keywords: ['json to plist', 'json to apple plist', 'json to property list', 'convert json to plist', 'json to ios plist', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
