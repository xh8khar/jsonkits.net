import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'INI to JSON Online — Free JSON Tool | JSONKits',
  description: 'Convert INI configuration files to JSON format. 100% client-side and free to use.',
  keywords: ['ini to json, convert ini to json, ini json converter, json converter, ini format, ini parser, online json tool, free json tool, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
