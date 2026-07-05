import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'TOML to JSON - Free Online Converter | JSONKits',
  description: 'Convert TOML configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['toml to json, toml to json online, toml to json tool, convert toml to json, toml json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
