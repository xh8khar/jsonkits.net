import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Fetch JSON from URL Online — Free JSON Tool | JSONKits',
  description: 'Fetch and display JSON data from any REST API URL endpoint. 100% client-side and free to use.',
  keywords: ['json viewer, view json online, json tree viewer, json explorer, json inspector, read json, json visualizer, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
