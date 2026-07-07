import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JWK to PEM Converter',
  description: 'Convert JSON Web Key (JWK) format to PEM public key format with key metadata.',
  keywords: ['jwk to pem', 'jwk converter', 'pem converter', 'json web key', 'rsa converter'],
  alternates: { canonical: 'https://www.jsonkits.net/jwk-to-pem/' },
  openGraph: {
    title: 'JWK to PEM Converter',
    description: 'Convert JSON Web Key (JWK) format to PEM public key format with key metadata.',
    url: 'https://www.jsonkits.net/jwk-to-pem/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JWK to PEM Converter',
    description: 'Convert JSON Web Key (JWK) format to PEM public key format with key metadata.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
