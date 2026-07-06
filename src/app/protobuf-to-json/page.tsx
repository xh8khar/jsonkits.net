import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Protocol Buffers to JSON Converter - Free Online Converter',
  description: 'Decode Protocol Buffers binary data back into readable JSON using a .proto schema definition.',
  keywords: ['protocol buffers to json, protocol buffers to json online, protocol buffers to json tool, protobuf to json, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
