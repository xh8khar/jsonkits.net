import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Viewer - Free Online Viewer ',
  description: 'View and explore JSON data in a readable tree structure. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json viewer, json viewer online, json viewer tool, viewer online, viewer tool, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
