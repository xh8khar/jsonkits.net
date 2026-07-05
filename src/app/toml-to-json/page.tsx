import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TOML to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert TOML configuration files to JSON format. 100% client-side and free to use.',
  keywords: ['toml to json, convert toml to json, toml json converter, json converter, toml format, toml parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
