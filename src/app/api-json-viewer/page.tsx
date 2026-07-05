import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'API JSON Viewer - Free Online Viewer ',
  description: 'View and explore JSON responses from REST API endpoints. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['api json viewer, api json viewer online, api json viewer tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
