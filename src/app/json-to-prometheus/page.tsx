import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Prometheus - Free Online Converter ',
  description: 'Convert JSON data to Prometheus metric format with gauge metrics for monitoring systems.',
  keywords: ['json to prometheus, json to prometheus online, json to prometheus tool, json to prometheus, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
