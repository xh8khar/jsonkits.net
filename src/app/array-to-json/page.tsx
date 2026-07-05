import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Array to JSON Object Online — Free JSON Tool | JSONKits',
  description: 'Convert arrays of key-value pairs back to JSON objects. 100% client-side and free to use.',
  keywords: ['array to json object, convert array to json object, array json object converter, json object conversion, array format, json converter, online tool, free converter, data transform, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
