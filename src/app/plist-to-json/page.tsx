import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PList to JSON Converter',
  description: 'Convert Apple Property List (PList) XML format to standard JSON. 100% free, client-side PList to JSON converter tool.',
  keywords: ['plist to json', 'apple plist to json', 'property list to json', 'convert plist to json', 'ios plist to json', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
