import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to LaTeX Table Generator',
  description: 'Convert JSON data to a LaTeX tabular table environment for academic papers and reports. 100% free, client-side JSON to LaTeX converter.',
  keywords: ['json to latex', 'json to latex table', 'latex table generator', 'tabular generator', 'json to tabular', 'online json tool', 'free json tool', 'jsonkits'],
  alternates: { canonical: 'https://www.jsonkits.net/json-to-latex-table/' },
  openGraph: {
    title: 'JSON to LaTeX Table Generator',
    description: 'Convert JSON data to a LaTeX tabular table environment for academic papers and reports. 100% free, client-side JSON to LaTeX converter.',
    url: 'https://www.jsonkits.net/json-to-latex-table/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to LaTeX Table Generator',
    description: 'Convert JSON data to a LaTeX tabular table environment for academic papers and reports. 100% free, client-side JSON to LaTeX converter.',
  },
}

export default function Page() {
  return <ToolPageClient />
}
