import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Array JSON to Object JSON Online — Free JSON Tool | JSONKits',
  description: 'Transpose an array of objects into an object of arrays. 100% client-side and free to use.',
  keywords: ['array json to object json, convert array json to object json, array json object json converter, object json conversion, array json format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
