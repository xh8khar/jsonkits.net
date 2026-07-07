import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to TOML Converter - Free Online Converter',
  description: 'Convert JSON to TOML format for Rust and Python project configs. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to toml, json to toml online, json to toml tool, convert json to toml, json toml converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-toml/' },
  openGraph: {
    title: 'JSON to TOML Converter - Free Online Converter',
    description: 'Convert JSON to TOML format for Rust and Python project configs. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-toml/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to TOML Converter - Free Online Converter',
    description: 'Convert JSON to TOML format for Rust and Python project configs. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
