import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'PO to JSON - Gettext Translation Converter',
  description: 'Convert GNU Gettext PO files to structured JSON format for web applications.',
  keywords: ['po to json', 'gettext to json', 'po converter', 'gettext converter', 'json translation'],
}

export default function Page() {
  return <ToolPageClient />
}
