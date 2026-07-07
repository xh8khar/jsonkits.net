import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWK to PEM Converter',
  description: 'Convert JSON Web Key (JWK) format to PEM public key format with key metadata.',
  keywords: ['jwk to pem', 'jwk converter', 'pem converter', 'json web key', 'rsa converter'],
}

export default function Page() {
  return <ToolPageClient />
}
