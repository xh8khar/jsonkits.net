import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to VBA - Generate VBA Class Modules',
  description: 'Generate VBA (Visual Basic for Applications) class modules with properties from JSON data.',
  keywords: ['json to vba', 'vba class generator', 'vba module', 'json to visual basic'],
}

export default function Page() {
  return <ToolPageClient />
}
