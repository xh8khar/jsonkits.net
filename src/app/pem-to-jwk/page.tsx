import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PEM to JWK Converter',
  description: 'Extract JWK metadata from PEM-formatted public/private key files.',
  keywords: ['pem to jwk', 'pem converter', 'jwk converter', 'json web key'],
  alternates: { canonical: 'https://www.jsonkits.net/pem-to-jwk/' },
  openGraph: {
    title: 'PEM to JWK Converter',
    description: 'Extract JWK metadata from PEM-formatted public/private key files.',
    url: 'https://www.jsonkits.net/pem-to-jwk/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEM to JWK Converter',
    description: 'Extract JWK metadata from PEM-formatted public/private key files.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
