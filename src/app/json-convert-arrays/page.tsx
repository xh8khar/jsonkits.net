import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Convert to Object Online — Free JSON Tool | JSONKits',
  description: 'Transpose array of objects into object of arrays. 100% client-side and free to use.',
  keywords: ['json convert to object, convert json convert to object, json convert object converter, object conversion, json convert format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
