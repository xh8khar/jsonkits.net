import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Explorer - Free Online Viewer | JSONKits',
  description: 'Interactively explore JSON data with expandable tree view. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json explorer, json explorer online, json explorer tool, json viewer, json parser, json tree viewer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
