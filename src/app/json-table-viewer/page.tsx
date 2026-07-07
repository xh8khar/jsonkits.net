import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Table Viewer - View JSON as Table',
  description: 'View your JSON data in an easy-to-read HTML table format. 100% free, client-side JSON table viewer tool.',
  keywords: ['json table viewer', 'view json as table', 'json table display', 'json data table', 'table viewer', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
