import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON File Viewer - Free Online Viewer | JSONKits',
  description: 'Open and view any .json file in a readable tree format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json file viewer, json file viewer online, json file viewer tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
