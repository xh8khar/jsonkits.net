import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to PO - JSON to Gettext Converter',
  description: 'Convert JSON translation files to GNU Gettext PO format.',
  keywords: ['json to po', 'json to gettext', 'po converter', 'gettext converter', 'i18n translation'],
}

export default function Page() {
  return <ToolPageClient />
}
