import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Live Preview - Free Online Viewer ',
  description: 'Preview JSON data with real-time structure analysis and formatting. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json live preview, json live preview online, json live preview tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
