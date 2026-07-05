import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: '.env to JSON - Free Online Converter ',
  description: 'Parse .env files back into JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['.env to json, .env to json online, .env to json tool, env to json online, env to json tool, env to json, convert env to json, env json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
