import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Apex - Generate Salesforce Apex Classes',
  description: 'Generate Salesforce Apex class definitions with getters/setters from JSON data samples. 100% free, client-side JSON to Apex converter.',
  keywords: ['json to apex', 'salesforce apex', 'apex class generator', 'json to salesforce', 'apex parser', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
