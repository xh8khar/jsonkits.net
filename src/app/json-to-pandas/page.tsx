import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Pandas DataFrame - Generate Python Pandas Code',
  description: 'Generate Python Pandas DataFrame code from JSON data for data analysis and manipulation.',
  keywords: ['json to pandas', 'pandas dataframe', 'python code generator', 'json to python'],
}

export default function Page() {
  return <ToolPageClient />
}
