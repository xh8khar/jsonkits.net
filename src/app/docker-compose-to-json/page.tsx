import type { Metadata } from 'next'
import ToolPageClient from './ToolPageClient'

export const metadata: Metadata = {
  title: 'Docker Compose to JSON - Free Online Converter ',
  description: 'Convert Docker Compose YAML to JSON format. 100% free, client-side JSON tool with no server uploads.',
  keywords: ['docker compose to json, docker compose to json online, docker compose to json tool, convert docker compose to json, docker compose json converter, json converter, convert json, json transformation, data conversion, json format converter, online json converter, online json tool, free json tool, jsonkits'],
}

export default function Page() {
  return <ToolPageClient />
}
