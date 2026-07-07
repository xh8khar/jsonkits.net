import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Chart - Visualize JSON Data',
  description: 'Create ASCII bar chart visualizations from numeric JSON data. 100% free, client-side JSON to chart tool.',
  keywords: ['json to chart', 'json visualization', 'ascii bar chart', 'json data viz', 'chart from json', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
