import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Fetch JSON from URL - Free Online Viewer | JSONKits',
  description: 'Fetch and display JSON data from any REST API URL endpoint. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['fetch json from url, fetch json from url online, fetch json from url tool, json viewer, json parser, json tree viewer, json explorer, view json online, json visualizer, json inspector, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
