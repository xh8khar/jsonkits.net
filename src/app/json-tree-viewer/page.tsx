import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Tree Viewer Online — Free JSON Tool | JSONKits',
  description: 'Visualize JSON data as an interactive tree structure. 100% client-side and free to use.',
  keywords: ['json viewer, view json online, json tree viewer, json explorer, json inspector, read json, json visualizer, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
