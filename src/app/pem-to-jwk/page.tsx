import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PEM to JWK Converter',
  description: 'Extract JWK metadata from PEM-formatted public/private key files.',
  keywords: ['pem to jwk', 'pem converter', 'jwk converter', 'json web key'],
}

export default function Page() {
  return <ToolPageClient />
}
