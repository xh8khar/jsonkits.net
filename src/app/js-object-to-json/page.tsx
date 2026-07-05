import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JS Object to JSON - Free Online Converter ',
  description: 'Convert JavaScript object literals to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['js object to json, js object to json online, js object to json tool, convert js object to json, js object json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
