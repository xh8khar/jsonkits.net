import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to URL Parameters - Free Online Converter ',
  description: 'Convert JSON objects to URL parameter format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to url parameters, json to url parameters online, json to url parameters tool, json to url params online, json to url params tool, json to url params, convert json to url params, json url params converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool'],
}

export default function Page() {
  return <ToolPageClient />
}
