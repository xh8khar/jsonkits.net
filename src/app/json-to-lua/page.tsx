import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Lua Converter - Free Online Converter',
  description: 'Convert JSON to Lua table syntax. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to lua, json to lua online, json to lua tool, convert json to lua, json lua converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-lua/' },
  openGraph: {
    title: 'JSON to Lua Converter - Free Online Converter',
    description: 'Convert JSON to Lua table syntax. 100% free, client-side JSON tool with no server uploads.',
    url: 'https://www.jsonkits.net/json-to-lua/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to Lua Converter - Free Online Converter',
    description: 'Convert JSON to Lua table syntax. 100% free, client-side JSON tool with no server uploads.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
