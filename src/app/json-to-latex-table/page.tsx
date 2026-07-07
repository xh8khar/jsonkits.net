import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to LaTeX Table Generator',
  description: 'Convert JSON data to a LaTeX tabular table environment for academic papers and reports. 100% free, client-side JSON to LaTeX converter.',
  keywords: ['json to latex', 'json to latex table', 'latex table generator', 'tabular generator', 'json to tabular', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
