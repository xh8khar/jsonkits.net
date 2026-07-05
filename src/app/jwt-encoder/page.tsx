import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWT Encoder - Free Online Converter ',
  description: 'Create JSON Web Tokens (JWT) by encoding header and payload with HS256 or HS512 signing algorithms. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jwt encoder, jwt encoder online, jwt encoder tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
