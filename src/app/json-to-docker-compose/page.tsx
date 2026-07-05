import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'JSON to Docker Compose - Free Online Converter ',
  description: 'Convert JSON data to Docker Compose YAML. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['json to docker compose, json to docker compose online, json to docker compose tool, convert json to docker compose, json docker compose converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
