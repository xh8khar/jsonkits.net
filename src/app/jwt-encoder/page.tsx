import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWT Encoder - Free Online Converter ',
  description: 'Create JSON Web Tokens (JWT) by encoding header and payload with HS256 or HS512 signing algorithms. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jwt encoder, jwt encoder online, jwt encoder tool, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/jwt-encoder/' },
  openGraph: {
    title: 'JWT Encoder - Free Online Converter ',
    description: 'Create JSON Web Tokens (JWT) by encoding header and payload with HS256 or HS512 signing algorithms. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/jwt-encoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWT Encoder - Free Online Converter ',
    description: 'Create JSON Web Tokens (JWT) by encoding header and payload with HS256 or HS512 signing algorithms. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
