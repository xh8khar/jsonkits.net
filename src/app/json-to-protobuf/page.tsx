import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Protocol Buffers - Free Online Converter ',
  description: 'Encode JSON data into Protocol Buffers binary format using a .proto schema definition with base64 output.',
  keywords: ['json to protocol buffers, json to protocol buffers online, json to protocol buffers tool, json to protobuf, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
