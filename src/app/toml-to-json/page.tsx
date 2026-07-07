import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TOML to JSON Converter - Free Online Converter',
  description: 'Convert TOML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['toml to json, toml to json online, toml to json tool, convert toml to json, toml json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/toml-to-json/' },
  openGraph: {
    title: 'TOML to JSON Converter - Free Online Converter',
    description: 'Convert TOML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/toml-to-json/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOML to JSON Converter - Free Online Converter',
    description: 'Convert TOML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
