import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to POJO - Generate Java POJO Classes from JSON',
  description: 'Generate Plain Old Java Object (POJO) classes with Jackson annotations from JSON data samples. 100% free, client-side JSON to POJO converter.',
  keywords: ['json to pojo', 'json to java', 'pojo generator', 'java class generator', 'json to java class', 'jackson annotations', 'online json tool', 'free json tool', 'jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
