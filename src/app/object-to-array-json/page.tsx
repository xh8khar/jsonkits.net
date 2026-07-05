import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Object JSON to Array JSON Online — Free JSON Tool | JSONKits',
  description: 'Transpose an object of arrays back into an array of objects. 100% client-side and free to use.',
  keywords: ['object json to array json, convert object json to array json, object json array json converter, array json conversion, object json format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
