import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Java Converter - Free Online Converter',
  description: 'Generate Java POJO classes from JSON samples. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to java, json to java online, json to java tool, convert json to java, json java converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
