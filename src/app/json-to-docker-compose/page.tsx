import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Docker Compose Online — Free JSON Tool | JSONKits',
  description: 'Convert JSON data to Docker Compose YAML. 100% client-side and free to use.',
  keywords: ['json to docker compose, convert json to docker compose, json docker compose converter, docker compose format, json converter, online json tool, free json converter, json transformation, data conversion, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
