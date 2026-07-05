import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'INI to JSON - Free Online Converter ',
  description: 'Convert INI configuration files to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['ini to json, ini to json online, ini to json tool, convert ini to json, ini json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
