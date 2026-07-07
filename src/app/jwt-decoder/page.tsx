import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWT Decoder - Free Online Validator ',
  description: 'Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['jwt decoder, jwt decoder online, jwt decoder tool, json validator, validate json, json syntax checker, json linter, check json online, json validation tool, json error checker, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/jwt-decoder/' },
  openGraph: {
    title: 'JWT Decoder - Free Online Validator ',
    description: 'Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/jwt-decoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWT Decoder - Free Online Validator ',
    description: 'Decode JSON Web Tokens (JWT) to inspect header, payload, and signature information. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
