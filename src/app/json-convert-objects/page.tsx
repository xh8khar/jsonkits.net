import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON Convert to Array Online — Free JSON Tool | JSONKits',
  description: 'Transpose object of arrays back into array of objects. 100% client-side and free to use.',
  keywords: ['json convert to array, convert json convert to array, json convert array converter, array conversion, json convert format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
