import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Delphi - Generate Delphi Pascal Classes',
  description: 'Generate Delphi/Object Pascal class definitions with published properties from JSON data.',
  keywords: ['json to delphi', 'delphi pascal', 'delphi class generator', 'object pascal'],
}

export default function Page() {
  return <ToolPageClient />
}
