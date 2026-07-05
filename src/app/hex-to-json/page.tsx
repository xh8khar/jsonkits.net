import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Hex to JSON - Free Online Converter ',
  description: 'Convert hexadecimal strings back to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['hex to json, hex to json online, hex to json tool, convert hex to json, hex json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
