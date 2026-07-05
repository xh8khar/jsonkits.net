import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Lua Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON to Lua table syntax. 100% client-side and free to use.',
  keywords: ['json to lua, convert json to lua, json lua converter, lua format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
